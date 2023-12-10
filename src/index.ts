import { compose } from "./core/compose";

/* == middleswares 数组 == */
import { middleware_pkgInfo } from "./actions/pkgInfo";
import { middleware_templateInfo } from "./actions/templateInfo";
import { middleware_copyDirectory } from "./actions/copyDirectory";
import { middleware_create } from "./actions/create";
import { middleware_getGitInfo } from "./actions/getGitInfo";

const middleware = [
  middleware_pkgInfo,
  middleware_getGitInfo,
  middleware_templateInfo,
  middleware_copyDirectory,
  middleware_create
];

export const main = (ctx) => {
  try {
    compose(middleware, ctx);
  } catch (error) {
  }
}
