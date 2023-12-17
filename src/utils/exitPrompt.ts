import { outro } from "@clack/prompts";
const chalk = require("chalk");

export const exitPrompt = () => {
  outro(chalk.red('Exit create-jmi'));
  process.exit(1);
};