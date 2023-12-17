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

const selectRegistry = async () => {
  const registry = await select({
    message: '选择镜像源',
    options: [
      {
        label: `taobao源: ${ERegistry.taobao}`,
        value: ERegistry.taobao,
        hint: 'recommended',
      },
      {
        label: `npm: ${ERegistry.npm}`,
        value: ERegistry.npm,
      },
    ],
    initialValue: ERegistry.taobao,
  });

  if (isCancel(registry)) {
    exitPrompt();
  }
  return registry as ERegistry;
};

export const middleware_install = async (next, ctxRef) => {
  let isProject = ctxRef.current?.type === "app";

  /* 若非工程则直接跳过 */
  if (!isProject){
    next();
    return;
  }

  const npmClient = await selectNpmClient();
  const registry = await selectRegistry();

  await installWithNpmClient({ npmClient, registry });

  ctxRef.current = {
    ...ctxRef.current,
    npmClient: npmClient
  };

  next();
}