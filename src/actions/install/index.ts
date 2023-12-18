import { installWithNpmClient } from "./installWithNpmClient";
import { selectNpmClient } from "./selectNpmClient";
import { selectRegistry } from "./selectRegistry";

export const middleware_install = async (next, ctxRef) => {
  /* 中间件：通过 middleware_install 控制插件是否开启 */
  if(!ctxRef.current?.["middleware_install"]){
    next();
    return; 
  }

  /* 选择 npm 下载工具：npm | pnpm | yarn */
  const npmClient = await selectNpmClient();

  /* 选择镜像源：taobao | npm */
  const registry = await selectRegistry();

  /* 开始安装 */
  await installWithNpmClient({ npmClient, registry });

  ctxRef.current = {
    ...ctxRef.current,
    npmClient: npmClient
  };

  next();
}