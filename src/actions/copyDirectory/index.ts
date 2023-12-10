import fse from "fs-extra";
import { globSync } from 'glob';
import { join, relative } from "path";
import chalk from "chalk";
import { readFileSync, writeFileSync } from "fs";
import Mustache from "mustache";

interface CopTplOpts {
  templatePath: string;
  mustacheParams?: any;
  targetPath: string;
  silent?: boolean;
  cwd?: any;
}

/* 内置 Mustache 模板引擎：快速拷贝 tpl 文件 */
const copyTpl = (opts: CopTplOpts) => {
  const { templatePath, mustacheParams, targetPath, silent, cwd = process.cwd() } = opts;
  const tpl = readFileSync(templatePath, "utf-8");
  const content = Mustache.render(tpl, mustacheParams);
  /* 使用 writeFile 时，需保证上层文件夹存在 */
  fse.ensureFileSync(targetPath)
  if (!silent) {
    console.log(`${chalk.green("Write:")} ${relative(cwd, targetPath)}`);
  }
  writeFileSync(targetPath, content, "utf-8");
}

export interface CopyDirectoryOpts {
  sourceDir: string;
  targetDir: string;
  mustacheParams?: any;
  silent?: boolean;
}

const copyDirectory = (opts: CopyDirectoryOpts) => {
  const { sourceDir, targetDir, mustacheParams = {}, silent } = opts;
  const files = globSync("**/*", {
    cwd: sourceDir,
    nodir: true,
    /* 允许路径以 . 开头 */
    dot: true,
    ignore: ['**/node_modules/**','meta.json'],
  })

  files.forEach(file => {
    const absFile = join(sourceDir, file);
    const absTargetFile = join(targetDir, file);
    /* fse.copySync 支持文件夹拷贝，但是不推荐使用，因为无法做多增量的拷贝操作 */

    /* 当拷贝 tpl 结尾文件时，需支持转译 */
    if (file.endsWith('.tpl')) {
      copyTpl({
        templatePath: absFile,
        targetPath: join(targetDir, file.replace(/\.tpl/, "")),
        mustacheParams: mustacheParams
      })
    } else {
      if (!silent) {
        console.log(`${chalk.green("Copy:")} ${file}`);
      }
      fse.copySync(absFile, absTargetFile)
    }
  })
  return files;
}

/* 
  作用：往环境变量中注入 package.json 信息
  后续中间件，可通过 context.originPackageJson 及 context.originVersion 获取
*/
export const middleware_copyDirectory = (next, ctxRef) => {
  ctxRef.current = {
    ...ctxRef.current,
    copyDirectory: copyDirectory,
    copyTpl: copyTpl
  };

  next();
}