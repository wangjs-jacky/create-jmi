import { TEMPLATEDS_DIR } from "../../constants";
import { join } from "path";
import type { CopyDirectoryOpts } from "../copyDirectory";
const prompts = require('prompts');

export const middleware_create = async (next, ctxRef) => {
  const { templateInfo, copyDirectory, templateName, targetDir, mustacheParams
  }: {
    templateInfo: string,
    templateName: string,
    copyDirectory: (opts: CopyDirectoryOpts) => string[],
    targetDir: string;
    mustacheParams: any;
  } = ctxRef.current;

  if (!templateInfo[templateName]) {
    console.log("输入的模板名称，不在支持的列表中");
    return;
  }

  const { questions = [] } = templateInfo[templateName];
  const answers = await prompts(questions, {
    onCancel() {
      process.exit(1);
    },
  });

  copyDirectory({
    sourceDir: join(TEMPLATEDS_DIR, templateName),
    targetDir: targetDir || process.cwd(),
    mustacheParams: {
      ...mustacheParams,
      ...answers
    }
  })

  next();
}