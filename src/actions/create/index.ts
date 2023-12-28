import { join } from "path";
import type { CopyDirectoryOpts } from "../copyDirectory";
import { updatePackageJson } from "../../utils/updatePackageJson";
const chalk = require("chalk");
/* 使用 prompts 解析 meta.json 字段 */
const prompts = require('prompts');

export const middleware_create = async (next, ctxRef) => {
  const { templateInfo, copyDirectory, templateName, targetDir, templateDir, mustacheParams
  }: {
    templateInfo: string;
    templateName: string;
    copyDirectory: (opts: CopyDirectoryOpts) => string[];
    targetDir: string;
    mustacheParams: any;
    templateDir: string;
  } = ctxRef.current;

  if (!templateInfo[templateName]) {
    console.log("输入的模板名称，不在支持的列表中");
    return;
  }

  const { questions = [], type, packageJson: mergePackageJson, middleware = [] } = templateInfo[templateName];

  /* 控制后续的插件 */
  const middlewaresSetByMeta = middleware.reduce((pre, cur) => {
    pre[cur] = true;
    return pre;
  }, {})

  const answers = await prompts(questions, {
    onCancel() {
      chalk.red('Exit create-jmi')
      process.exit(1);
    },
  });

  await copyDirectory({
    sourceDir: join(templateDir, templateName),
    targetDir: targetDir || process.cwd(),
    mustacheParams: {
      ...mustacheParams,
      ...answers
    }
  })

  if (mergePackageJson) {
    await updatePackageJson(ctxRef, mergePackageJson)
  }

  const middlewares = type === "app"
    ? {
      "middleware_install": true,
      "middleware_initGit": true
    }
    : {}

  ctxRef.current = {
    ...ctxRef.current,
    ...middlewares,
    ...middlewaresSetByMeta
  }

  next();
}