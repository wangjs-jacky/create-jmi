import { isCancel, select } from "@clack/prompts";
import { installWithNpmClient } from "./installWithNpmClient";
import { exitPrompt } from "../../utils/exitPrompt";

export enum ENpmClient {
  npm = 'npm',
  yarn = 'yarn',
  pnpm = 'pnpm',
}

export enum ERegistry {
  npm = 'https://registry.npmjs.com/',
  taobao = 'https://registry.npmmirror.com/',
}

export const selectNpmClient = async () => {
  const npmClient = await select({
    message: '请选择包管理器',
    options: [
      { label: ENpmClient.npm, value: ENpmClient.npm },
      { label: ENpmClient.yarn, value: ENpmClient.yarn },
      { label: ENpmClient.pnpm, value: ENpmClient.pnpm, hint: 'recommended' },
    ],
    initialValue: ENpmClient.pnpm,
  })

  if (isCancel(npmClient)) {
    exitPrompt();
  }
  return npmClient as ENpmClient;
};

