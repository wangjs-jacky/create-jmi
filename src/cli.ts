import { cac } from "cac";
import { main } from ".";
import { PACKAGE_ROOT } from "./constants";

export function run() {
  const version = require(PACKAGE_ROOT).version;
  const cli = cac("jmi").version(version).help();
  cli
    .command("g [templateName]", "选择需要生成的模板,如果不选择则弹出所有 templates 下的文件夹模板")
    .action((templateName: string, options: any = {}) => {
      const ctx = {
        templateName,
        ...options
      }
      main({ ctx });
    })

  cli.parse();
}