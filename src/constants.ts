import { join } from "path";

export const srcDir = join(__dirname, '.');

/* 应用根路径 */
export const PROJECT_ROOT = join(__dirname, "..");

/* package.json 文件 */
export const PACKAGE_ROOT = join(PROJECT_ROOT, "package.json");

/* 模板工程目录 */
export const TEMPLATEDS_DIR = join(PROJECT_ROOT, "templates");