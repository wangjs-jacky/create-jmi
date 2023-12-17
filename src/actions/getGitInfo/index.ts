import { existsSync } from 'fs';
import { join } from 'path';
import { cancel, confirm, isCancel } from '@clack/prompts';

/* 初始化 Git 项目 */
const initGit = async ({ shouldInitGit, cwd = process.cwd() }) => {
  if (shouldInitGit) {
    const { $ } = await import('execa');
    try {
      await $({ cwd: cwd })`git init`;
    } catch {
      console.error(`初始化 Git 仓库失败`);
    }
  } else {
    console.info(`跳过 Git 初始化`);
  }
}

export const middleware_getGitInfo = async (next, ctxRef) => {
  let shouldInitGit = ctxRef.current.commandArgs?.git || existsSync(join(process.cwd(), '.git'));

  let isProject = ctxRef.current?.type === "app";

  /* 若非工程则直接跳过 */
  if (!isProject){
    next();
    return;
  }


  if (!shouldInitGit) {
    shouldInitGit = await confirm({
      message: "是否需要 git 初始化？",
      initialValue: true
    });

    if (isCancel(shouldInitGit)) {
      cancel('Operation cancelled.');
      process.exit(1);
    }
  }

  await initGit({ shouldInitGit });

  next();
}

