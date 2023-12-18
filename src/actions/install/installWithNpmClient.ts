const chalk = require("chalk");
import { ENpmClient, ERegistry } from "./selectNpmClient";
import { getPnpmMajorVersion } from "./getPnpmMajorVersion";
import { spinner } from '@clack/prompts';

export const installWithNpmClient = async ({
  npmClient,
  cwd = process.cwd(),
  registry = ERegistry.taobao,
}: {
  npmClient: ENpmClient;
  cwd?: string;
  registry: string;
}): Promise<void> => {
  const { $ } = await import('execa');
  const s = spinner();
  const pnpmVersion = await getPnpmMajorVersion();
  const isPmp8 = pnpmVersion == 8;
  s.start(`使用 ${npmClient} 安装依赖:`);
  try {
    switch (npmClient) {
      case ENpmClient.npm:
        await $({ cwd: cwd, stdio: "inherit" })`npm install --registry=${registry}`;
        break;
      case ENpmClient.yarn:
        await $({ cwd: cwd, stdio: "inherit" })`yarn --registry=${registry}`;
        break;
      case ENpmClient.pnpm:
        if (isPmp8) {
          /* 其中 -L 代表仅更新 lock 文件而不去修改 package.json 文件 */
          /* await $({ cwd: cwd, stdio: "inherit" })`pnpm up -L --registry=${registry}`; */
          await $({ cwd: cwd, stdio: "inherit" })`pnpm i --registry=${registry}`;
        } else {
          await $({ cwd: cwd, stdio: "inherit" })`pnpm i --registry=${registry}`;
        }
        break;
    }
  } catch (error) {
    throw error;
  }
  s.stop(chalk.green(`安装完成`));
};