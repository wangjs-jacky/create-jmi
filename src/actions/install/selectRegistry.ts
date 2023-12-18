import { isCancel, select } from "@clack/prompts";
import { ERegistry } from "./selectNpmClient";
import { exitPrompt } from "../../utils/exitPrompt";

export const selectRegistry = async () => {
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