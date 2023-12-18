import { compose } from "./core/compose";

/* == middleswares 数组 == */
import {
  middleware_copyDirectory,
  middleware_create,
  middleware_initGit,
  middleware_install,
  middleware_pkgInfo,
  middleware_templateInfo
} from "./actions";

const chalk = require("chalk");
import { intro } from "@clack/prompts";

const middleware = [
  middleware_pkgInfo,
  middleware_templateInfo,
  middleware_copyDirectory,
  middleware_create,
  middleware_initGit,
  middleware_install
];

export const main = (ctx) => {
  try {
    intro(chalk.bgHex('#19BDD2')(' create-jmi '));
    compose(middleware, ctx);
  } catch (error) {
  }
}
