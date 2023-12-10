import { renderSnippet } from ".";
import { expect, it } from "vitest";
import { join } from "path"
import { writeFileSync } from "fs";


const text = `
const prompts = require('prompts');
import { readFileSync, writeFileSync } from "fs";
import fse from "fs-extra";
import Mustache from "mustache";
import { globSync } from 'glob'
import { join, relative } from "path";
import chalk from "chalk";
`
const tabtrigger = "abc";
const description = "bbbb";


it("测试 generate 模板拷贝", () => {
  const aa = renderSnippet(text, tabtrigger, description);

  expect(aa).toMatchInlineSnapshot(`
    "
      {
        "bbbb": {
          "prefix": "abc",
          "body": [
            "",
    "const prompts = require('prompts');",
    "import { readFileSync, writeFileSync } from \\"fs\\";",
    "import fse from \\"fs-extra\\";",
    "import Mustache from \\"mustache\\";",
    "import { globSync } from 'glob'",
    "import { join, relative } from \\"path\\";",
    "import chalk from \\"chalk\\";",
    ""
          ],
          "description": "bbbb"
        }
      }"
  `)

  writeFileSync(join(__dirname, './package.json'), aa)
})

