import { compose } from "./core/compose";

/* == middleswares 数组 == */
import { middleware_pkgInfo } from "./actions/pkgInfo";
import { middleware_templateInfo } from "./actions/templateInfo";
import { middleware_copyDirectory } from "./actions/copyDirectory";
import { middleware_create } from "./actions/create";
import { middleware_getGitInfo } from "./actions/getGitInfo";
import { middleware_install } from "./actions/install/selectNpmClient";
const chalk = require("chalk");
import { intro } from "@clack/prompts";

const middleware = [
  middleware_pkgInfo,
  middleware_templateInfo,
  middleware_copyDirectory,
  middleware_create,
  middleware_getGitInfo,
  middleware_install
];

export const main = (ctx) => {
  try {
    intro(chalk.bgHex('#19BDD2')(' create-jmi '));
    compose(middleware, ctx);
  } catch (error) {
  }
}
