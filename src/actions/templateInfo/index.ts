import { extname, join } from "path";
import { TEMPLATEDS_DIR } from "../../constants";
import { existsSync, readdirSync } from "fs";
import fse from "fs-extra";
import { isCancel, select } from '@clack/prompts';
import { exitPrompt } from "../../utils/exitPrompt";

interface metaJSONType {
  /** @name 模板描述 */
  "description": string;
  /** @name prompts问题 */
  "questions": any[];
  /** @name 工程类型，对于app类型的支持git以及install提问  */
  "type": "app" | "file";
}

const filterDirs = (dirs: string[], prefix = "j-") => {
  return dirs.filter((dir) => dir.startsWith(prefix))
}

const generateMetaInfo = (absDir: string, ctxRef) => {
  const supports = ["meta.js", "meta.json"];

  let isMetaExist = false;
  let content = null;

  for (let i = 0; i < supports.length; i++) {
    const support = supports[i];
    const metaJSON = join(absDir, support);
    if (!isMetaExist && existsSync(metaJSON)) {
      isMetaExist = true;
      if (extname(support) === ".json") {
        content = fse.readJsonSync(metaJSON, { throws: false }) as metaJSONType;
      } else if (extname(support) === ".js") {
        content = require("../../../templates/j-vite/meta.js");
        if (typeof content === "function") {
          content = content(ctxRef);
        }
      }
    }
  }

  if (!isMetaExist) {
    console.error("dev: 请给 template 模板新增 meta.json 或 meta.ts 文件");
  }

  return content;
}

/**
 * 获取 templates 下的文件夹信息
 */
export const getTemplateInfo = (ctxRef) => {
  const { prefix } = ctxRef.current;
  const dirs = readdirSync(TEMPLATEDS_DIR, "utf-8");

  return filterDirs(dirs, prefix).reduce((pre, dir) => {
    const absDir = join(TEMPLATEDS_DIR, dir);
    const content = generateMetaInfo(absDir, ctxRef);
    pre[dir] = content;
    return pre;
  }, {})
};

/* 
  作用：往环境变量中注入 templates 文件夹
  后续中间件，可通过 context.originPackageJson 及 context.originVersion 获取
*/
export const middleware_templateInfo = async (next, ctxRef) => {
  const templateInfo = getTemplateInfo(ctxRef);
  let templateName = ctxRef.current.templateName;

  if (!ctxRef.current.templateName) {
    templateName = await select({
      message: '请选择一个模板工程',
      options: Object.keys(templateInfo).map(template => ({
        label: template,
        hint: templateInfo[template]?.description,
        value: template
      })),
    });

    if (isCancel(templateName)) {
      exitPrompt();
    }
  }

  ctxRef.current = {
    ...ctxRef.current,
    templateName,
    templateInfo: templateInfo
  };

  next();
}