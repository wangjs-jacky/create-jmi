import { extname, join } from "path";
import { METAFILES, TEMPLATEDS_DIR } from "../../constants";
import { existsSync, readdirSync } from "fs";
import { readJsonSync } from "fs-extra";
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

const generateMetaInfo = async (absDir: string, ctxRef) => {
  const supports = METAFILES;

  let isMetaExist = false;
  let content = null;

  for (let i = 0; i < supports.length; i++) {
    const support = supports[i];
    const metaJSON = join(absDir, support);
    if (!isMetaExist && existsSync(metaJSON)) {
      isMetaExist = true;
      if (extname(support) === ".json") {
        content = readJsonSync(metaJSON) as metaJSONType;
      } else if ([".js", ".cjs", ".mjs"].includes(extname(support))) {
        if ([".js", ".cjs"].includes(extname(support))) {
          content = require(metaJSON);
        } else {
          content = (await import(metaJSON)).default;
        }
        if (typeof content === "function") {
          content = content(ctxRef);
        }
      }
    }
  }

  /* if (!isMetaExist) {
    console.error("dev: 请给 template 模板新增 meta.json 或 meta.ts 文件");
  } */

  return content;
}

/**
 * 获取 templates 下的文件夹信息
 */
export const getTemplateInfo = async (ctxRef, templateDir = TEMPLATEDS_DIR) => {
  const { prefix } = ctxRef.current;
  const dirs = filterDirs(readdirSync(templateDir, "utf-8"), prefix);
  
  let pre = {};

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const absDir = join(templateDir, dir);
    const content = await generateMetaInfo(absDir, ctxRef);
    pre[dir] = content;
  }

  return pre;
};

const getTemplate = async (ctxRef, templateDir) => {
  const templateInfo = await getTemplateInfo(ctxRef, templateDir);
  let templateName = ctxRef.current.templateName;
  if (templateName) {
    templateName = templateName.startsWith("j-") ? templateName : "j-" + templateName;
  }

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

  return {
    templateName,
    templateInfo,
  }
}

export const middleware_templateInfo = async (next, ctxRef) => {
  let templateInfo, templateName = ".", templateDir = join(TEMPLATEDS_DIR);
  /* 说明不存在 meta.json 文件 */
  do {
    templateDir = join(templateDir, templateName);
    const res = await getTemplate(ctxRef, templateDir);
    templateInfo = res.templateInfo;
    templateName = res.templateName;
  } while (!templateInfo[templateName]);

  ctxRef.current = {
    ...ctxRef.current,
    templateName,
    templateInfo,
    templateDir
  };

  next();
}