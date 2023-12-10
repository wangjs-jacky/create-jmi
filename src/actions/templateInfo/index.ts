import { join } from "path";
import { TEMPLATEDS_DIR } from "../../constants";
import { readFileSync, readdirSync } from "fs";
import fse from "fs-extra";
const prompts = require('prompts');

/* 
  
*/
const filterDirs = (dirs: string[], prefix = "j-") => {
  return dirs.filter((dir) => dir.startsWith(prefix))
}

/**
 * 获取 templates 下的文件夹信息
 */
export const getTemplateInfo = (ctxRef) => {
  const { prefix } = ctxRef.current;
  const dirs = readdirSync(TEMPLATEDS_DIR, "utf-8");
  console.log("TEMPLATEDS_DIR", TEMPLATEDS_DIR);

  return filterDirs(dirs, prefix).reduce((pre, dir) => {
    const absDir = join(TEMPLATEDS_DIR, dir);
    const metaJSON = join(absDir, "meta.json");
    const content = fse.readJsonSync(metaJSON, { throws: false })
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
    const { value } = await prompts({
      type: 'select',
      name: 'value',
      message: '请选择一个模板工程',
      choices: Object.keys(templateInfo).map(template => ({
        title: template,
        description: templateInfo[template].description,
        value: template
      })),
      initial: 0,
    });
    templateName = value;
  }

  ctxRef.current = {
    ...ctxRef.current,
    templateName,
    templateInfo: templateInfo
  };

  next();
}