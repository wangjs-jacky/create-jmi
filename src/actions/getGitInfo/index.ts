export interface IGitInfo {
  username: string;
  email: string;
}

export const getGitInfo = async (): Promise<IGitInfo> => {
  const { $ } = await import('execa');
  try {
    const [{ stdout: username }, { stdout: email }] = await Promise.all([
      await $`git config --global user.name`,
      await $`git config --global user.email`,
    ]);

    return {
      username,
      email,
    }

  } catch (e) {
    return {
      username: '',
      email: '',
    };
  }
};

export const middleware_getGitInfo = async (next, ctxRef) => {
  const { username, email } = await getGitInfo()

  ctxRef.current = {
    ...ctxRef.current,
    gitInfo: { username, email }
  };

  next();
}

