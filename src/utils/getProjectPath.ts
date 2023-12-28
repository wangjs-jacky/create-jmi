import { join } from "path";

// 获取项目文件
export const getProjectPath = (dir = './'): string => {
  return join(process.cwd(), dir);
};