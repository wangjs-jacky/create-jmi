import { TEMPLATEDS_DIR } from "../../constants";
import { join } from "path";
import type { CopyDirectoryOpts } from "../copyDirectory";
const chalk = require("chalk");
/* 使用 prompts 解析 meta.json 字段 */
const prompts = require('prompts');

export const middleware_create = async (next, ctxRef) => {
  const { templateInfo, copyDirectory, templateName, targetDir, mustacheParams
  }: {
    templateInfo: string,
    templateName: string,
    copyDirectory: (opts: CopyDirectoryOpts) => string[],
    targetDir: string;
    mustacheParams: any;
  } = ctxRef.current;

  if (!templateInfo[templateName]) {
    console.log("输入的模板名称，不在支持的列表中");
    return;
  }

  const { questions = [], type } = templateInfo[templateName];

  const answers = await prompts(questions, {
    onCancel() {
      chalk.red('Exit create-jmi')
      process.exit(1);
    },
  });

  await copyDirectory({
    sourceDir: join(TEMPLATEDS_DIR, templateName),
    targetDir: targetDir || process.cwd(),
    mustacheParams: {
      ...mustacheParams,
      ...answers
    }
  })

  ctxRef.current = {
    ...ctxRef.current,
    type: type,
  }

  next();
}