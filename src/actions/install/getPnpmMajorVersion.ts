export async function getPnpmMajorVersion() {
  const { $ } = await import('execa');
  try {
    const { stdout } = await $`pnpm --version`;
    return parseInt(stdout.trim().split('.')[0], 10);
  } catch (e) {
    throw new Error('请先安装 pnpm 依赖', { cause: e });
  }
}