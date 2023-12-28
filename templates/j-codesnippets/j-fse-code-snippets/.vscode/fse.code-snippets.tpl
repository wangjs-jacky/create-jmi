{
  "[fs-extra][copy][async][callback 拷贝文件]": {
    "prefix": "{{triggerName}}-copy",
    "body": [
      "const fse = require('fs-extra');",
      "",
      "fse.copy('/tmp/myfile', '/tmp/mynewfile', err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][copy][callback 形式]"
  },
  "[fs-extra][copy][async][callback 拷贝文件夹]": {
    "prefix": "{{triggerName}}-copy",
    "body": [
      "const fse = require('fs-extra');",
      "",
      "fs.copy('/tmp/mydir', '/tmp/mynewdir', err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "}) "
    ],
    "description": "[fs-extra][copy][拷贝文件夹]"
  },
  "[fs-extra][copy][async][拷贝文件-async模式]": {
    "prefix": "{{triggerName}}-copy",
    "body": [
      "async function example () {",
      "  try {",
      "    await fse.copy('/tmp/myfile', '/tmp/mynewfile')",
      "    console.log('success!')",
      "  } catch (err) {",
      "    console.error(err)",
      "  }",
      "}"
    ],
    "description": "[fs-extra][copy][拷贝文件-async模式]"
  },
  "[fs-extra][copy][async][支持过滤模式]": {
    "prefix": "{{triggerName}}-copy",
    "body": [
      "const filterFunc = (src, dest) => {",
      "  // your logic here",
      "  // it will be copied if return true",
      "}",
      "",
      "fs.copy('/tmp/mydir', '/tmp/mynewdir', { filter: filterFunc }, err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][copy][支持过滤模式]"
  },
  "[fs-extra][emptyDir][async][回调模式]": {
    "prefix": "{{triggerName}}-emptyDir",
    "body": [
      "fse.emptyDir('/tmp/some/dir', err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][emptyDir][async][回调模式]"
  },
  "[fs-extra][emptyDir][async][promise模式]": {
    "prefix": "{{triggerName}}-emptyDir",
    "body": [
      "fse.emptyDir('/tmp/some/dir')",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][emptyDir][async][promise模式]"
  },
  "[fs-extra][emptyDir][async][async模式]": {
    "prefix": "{{triggerName}}-emptyDir",
    "body": [
      "try {",
      "  await fse.emptyDir('/tmp/some/dir')",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][emptyDir][async][promise模式]"
  },
  "[fs-extra][ensureDir][async][callback模式]": {
    "prefix": [
      "{{triggerName}}-ensureDir",
      "{{triggerName}}-mkdirp",
      "{{triggerName}}-mkdirs"
    ],
    "body": [
      "/* ",
      "在下述代码中，desiredMode 的作用是指定创建目录时所需的模式权限。具体来说，它指定了该目录所需的文件系统权限（即读、写和执行权限），在这里使用的是0o2775的八进制形式。如：",
      "0o777：所有用户都具有读、写和执行权限。",
      "0o755：所有用户都具有读和执行权限，但只有文件的所有者才能进行写操作。",
      "0o644：所有用户都具有读权限，但只有文件的所有者才能进行写操作。",
      "*/",
      "const dir = '/tmp/this/path/does/not/exist'",
      "const desiredMode = 0o2775 /* mode integer */",
      "",
      "fse.ensureDir(dir, desiredMode, err => {",
      "  console.log(err) // => null",
      "})"
    ],
    "description": "[fs-extra][ensureDir][async][callback模式]"
  },
  "[fs-extra][ensureDir][async][promise模式]": {
    "prefix": [
      "{{triggerName}}-ensureDir",
      "{{triggerName}}-mkdirp",
      "{{triggerName}}-mkdirs"
    ],
    "body": [
      "fse.ensureDir(dir)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][ensureDir][async][promise模式]"
  },
  "[fs-extra][ensureDir][async][promise模式并支持 mode 整数]": {
    "prefix": [
      "{{triggerName}}-ensureDir",
      "{{triggerName}}-mkdirp",
      "{{triggerName}}-mkdirs"
    ],
    "body": [
      "fs.ensureDir(dir, desiredMode)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][ensureDir][async][promise模式并支持 mode 整数]"
  },
  "[fs-extra][ensureDir][async][async 模式并支持 mode 整数]": {
    "prefix": [
      "{{triggerName}}-ensureDir",
      "{{triggerName}}-mkdirp",
      "{{triggerName}}-mkdirs"
    ],
    "body": [
      "const options = {",
      "  mode: 0o2775",
      "}",
      "try {",
      "  await fs.ensureDir(directory, options)",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][ensureDir][async][promise模式并支持 mode 整数]"
  },
  "[fs-extra][ensureFile][async][callback模式]": {
    "prefix": "{{triggerName}}-ensureFile",
    "body": [
      "const file = '/tmp/this/path/does/not/exist/file.txt'",
      "fse.ensureFile(file, err => {",
      "  console.log(err)",
      "})",
      ""
    ],
    "description": "[fs-extra][ensureFile][async][callback模式]"
  },
  "[fs-extra][ensureFile][async][promise模式]": {
    "prefix": "{{triggerName}}-ensureFile",
    "body": [
      "fse.ensureFile(file)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][ensureFile][async][promise模式]"
  },
  "[fs-extra][ensureFile][async][async模式]": {
    "prefix": "{{triggerName}}-ensureFile",
    "body": [
      "try {",
      "  await fs.ensureFile(f)",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][ensureFile][async][async模式]"
  },
  "[fs-extra][ensureLink][async][callback 模式]": {
    "prefix": "{{triggerName}}-ensureLink",
    "body": [
      "const srcPath = '/tmp/file.txt'",
      "const destPath = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "fse.ensureLink(srcPath, destPath, err => {",
      "  console.log(err) // => null",
      "})"
    ],
    "description": "[fs-extra][ensureLink][async][callback 模式]"
  },
  "[fs-extra][ensureLink][async][promise 模式]": {
    "prefix": "{{triggerName}}-ensureLink",
    "body": [
      "const srcPath = '/tmp/file.txt'",
      "const destPath = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "fs.ensureLink(srcPath, destPath)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][ensureLink][async][promise 模式]"
  },
  "[fs-extra][ensureLink][async][async 模式]": {
    "prefix": "{{triggerName}}-ensureLink",
    "body": [
      "const srcPath = '/tmp/file.txt'",
      "const destPath = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "try {",
      "  await fs.ensureLink(src, dest)",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][ensureLink][async][async 模式]"
  },
  "[fs-extra][ensureSymlink][async][callback 模式]": {
    "prefix": "{{triggerName}}-ensureSymlink",
    "body": [
      "const srcPath = '/tmp/file.txt'",
      "const destPath = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "fs.ensureSymlink(srcPath, destPath, err => {",
      "  console.log(err) // => null",
      "  // symlink has now been created, including the directory it is to be placed in",
      "})"
    ],
    "description": "[fs-extra][ensureSymlink][async][callback 模式]"
  },
  "[fs-extra][ensureSymlink][async][promise 模式]": {
    "prefix": "{{triggerName}}-ensureSymlink",
    "body": [
      "fs.ensureSymlink(srcPath, destPath)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][ensureSymlink][async][promise 模式]"
  },
  "[fs-extra][ensureSymlink][async][async 模式]": {
    "prefix": "{{triggerName}}-ensureSymlink",
    "body": [
      "try {",
      "  await fs.ensureSymlink(src, dest)",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][ensureSymlink][async][async 模式]"
  },
  "[fs-extra][cjs]导入": {
    "prefix": [
      "{{triggerName}}-cjs",
      "{{triggerName}}-require"
    ],
    "body": [
      "/* ",
      "对于 commjs 规范，fs中的所有方法都附加到fs-extra",
      "如果没有传递回调，所有 fs 方法都会返回 promise",
      "*/",
      "const fse = require('fs-extra')"
    ],
    "description": "[fs-extra][cjs]导入"
  },
  "[fs-extra][esm][promise]": {
    "prefix": [
      "{{triggerName}}-esm",
      "{{triggerName}}-import"
    ],
    "body": [
      "/* ",
      "fs-extra/esm，同时支持默认导出和命名导出",
      "注意:fs 方法不包括在 fs-extra/esm 中,仍然需要分别导入 fs 或 fs/promise",
      "*/",
      "import { readFileSync } from 'fs'",
      "import { readFile } from 'fs/promises'",
      "import { outputFile, outputFileSync } from 'fs-extra/esm'"
    ],
    "description": "[fs-extra][esm][promise]"
  },
  "[fs-extra][example]提供简单示例": {
    "prefix": "{{triggerName}}-example",
    "body": [
      "const fs = require('fs-extra')",
      "// Async with promises:",
      "fs.copy('/tmp/myfile', '/tmp/mynewfile')",
      "  .then(() => console.log('success!'))",
      "  .catch(err => console.error(err))",
      "",
      "// Async with callbacks:",
      "fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][example]提供简单示例"
  },
  "[fs-extra][example]提供简单示例2": {
    "prefix": "{{triggerName}}-example",
    "body": [
      "const fs = require('fs-extra')",
      "// Sync:",
      "try {",
      "  fs.copySync('/tmp/myfile', '/tmp/mynewfile')",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}",
      "",
      "// Async/Await:",
      "async function copyFiles () {",
      "  try {",
      "    await fs.copy('/tmp/myfile', '/tmp/mynewfile')",
      "    console.log('success!')",
      "  } catch (err) {",
      "    console.error(err)",
      "  }",
      "}"
    ],
    "description": "[fs-extra][example]提供简单示例"
  },
  "[fs-extra][move][async][callback 模式]": {
    "prefix": "{{triggerName}}-move",
    "body": [
      "const src = '/tmp/file.txt'",
      "const dest = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "fse.move(src, dest, err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][move][async][callback 模式]"
  },
  "[fs-extra][move][async][promise 模式]": {
    "prefix": "{{triggerName}}-move",
    "body": [
      "const src = '/tmp/file.txt'",
      "const dest = '/tmp/this/path/does/not/exist/file.txt'",
      "",
      "fse.move(src, dest)",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][move][async][promise 模式]"
  },
  "[fs-extra][move][async][async 模式]": {
    "prefix": "{{triggerName}}-move",
    "body": [
      "const src = '/tmp/file.txt'",
      "const dest = '/tmp/this/path/does/not/exist/file.txt'",
      "try {",
      "  await fse.move(src, dest)",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][move][async][async 模式]"
  },
  "[fs-extra][move][async][支持 overwrite]": {
    "prefix": "{{triggerName}}-move",
    "body": [
      "fse.move('/tmp/somedir', '/tmp/may/already/exist/somedir', { overwrite: true }, err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][move][async][支持 overwrite]"
  },
  "[fs-extra][outputFile][async][callback 模式] 相当于 fs.writeFile": {
    "prefix": "{{triggerName}}-outputFile",
    "body": [
      "fse.outputFile(file, 'hello!', err => {",
      "  console.log(err) // => null",
      "  fse.readFile(file, 'utf8', (err, data) => {",
      "    if (err) return console.error(err)",
      "    console.log(data) // => hello!",
      "  })",
      "})"
    ],
    "description": "[fs-extra][outputFile][async][callback 模式] 相当于 fs.writeFile"
  },
  "[fs-extra][outputFile][async][[promise 模式] 相当于 fs.writeFile": {
    "prefix": "{{triggerName}}-outputFile",
    "body": [
      "fse.outputFile(file, 'hello!')",
      ".then(() => fse.readFile(file, 'utf8'))",
      ".then(data => {",
      "  console.log(data) // => hello!",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})",
      ""
    ],
    "description": "[fs-extra][outputFile][async][[promise 模式] 相当于 fs.writeFile"
  },
  "[fs-extra][outputFile][async][async 模式] 相当于 fs.writeFile": {
    "prefix": "{{triggerName}}-outputFile",
    "body": [
      "try {",
      "  await fse.outputFile(file, 'hello!')",
      "  const data = await fse.readFile(file, 'utf8')",
      "  console.log(data) // => hello!",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][outputFile][async][async 模式] 相当于 fs.writeFile"
  },
  "[fs-extra][outputJson][async][callback 模式] 相当于 fs.writeJson": {
    "prefix": "{{triggerName}}-outputJson",
    "body": [
      "fse.outputJson(file, {name: 'JP'}, err => {",
      "  console.log(err) // => null",
      "  fse.readJson(file, (err, data) => {",
      "    if (err) return console.error(err)",
      "    console.log(data.name) // => JP",
      "  })",
      "})"
    ],
    "description": "[fs-extra][outputJson][async][callback 模式] 相当于 fs.writeJson"
  },
  "[fs-extra][outputJson][async][promise 模式] 相当于 fs.writeJson": {
    "prefix": "{{triggerName}}-outputJson",
    "body": [
      "fse.outputJson(file, {name: 'JP'})",
      ".then(() => fse.readJson(file))",
      ".then(data => {",
      "  console.log(data.name) // => JP",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][outputJson][async][promise 模式] 相当于 fs.writeJson"
  },
  "[fs-extra][outputJson][async][async 模式] 相当于 fs.writeJson": {
    "prefix": "{{triggerName}}-outputJson",
    "body": [
      "try {",
      "  await fse.outputJson(f, {name: 'JP'})",
      "  const data = await fse.readJson(f)",
      "  console.log(data.name) // => JP",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][outputJson][async][async 模式] 相当于 fs.writeJson"
  },
  "[fs-extra][outputJson][async][callback 模式] 相比于 fs.exists 多提供状态签名": {
    "prefix": "fse.pathExists",
    "body": [
      "fse.pathExists(file, (err, exists) => {",
      "  console.log(err) // => null",
      "  console.log(exists) // => false",
      "})"
    ],
    "description": "[fs-extra][outputJson][async][callback 模式] 相比于 fs.exists 多提供状态签名"
  },
  "[fs-extra][outputJson][async][promise 模式] 相比于 fs.exists 多提供状态签名": {
    "prefix": "fse.pathExists",
    "body": [
      "fse.pathExists(file)",
      "  .then(exists => console.log(exists)) // => false"
    ],
    "description": "[fs-extra][outputJson][async][promise 模式] 相比于 fs.exists 多提供状态签名"
  },
  "[fs-extra][outputJson][async][async 模式] 相比于 fs.exists 多提供状态签名": {
    "prefix": "fse.pathExists",
    "body": [
      "const exists = await fse.pathExists(f)"
    ],
    "description": "[fs-extra][outputJson][async][async 模式] 相比于 fs.exists 多提供状态签名"
  },
  "[fs-extra][readJson][async][callback 模式] ": {
    "prefix": "{{triggerName}}-remove",
    "body": [
      "fs.remove('/tmp/myfile', err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})",
      ""
    ],
    "description": "[fs-extra][readJson][async][callback 模式] "
  },
  "[fs-extra][readJson][async][promise 模式] ": {
    "prefix": "{{triggerName}}-remove",
    "body": [
      "fse.remove('/tmp/myfile')",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][readJson][async][promise 模式] "
  },
  "[fs-extra][readJson][async][async 模式] ": {
    "prefix": "{{triggerName}}-remove",
    "body": [
      "try {",
      "  await fs.remove('/tmp/myfile')",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][readJson][async][async 模式] "
  },
  "[fs-extra][readJson][async][callback 模式] 支持读取错误 json 格式文件": {
    "prefix": "{{triggerName}}-readJson",
    "body": [
      "fs.readJson(file, { throws: false }, (err, obj) => {",
      "  if (err) console.error(err)",
      "  console.log(obj) // => null",
      "})"
    ],
    "description": "[fs-extra][readJson][async][callback 模式] 支持读取错误 json 格式文件"
  },
  "[fs-extra][readJson][async][promise 模式] 支持读取错误 json 格式文件": {
    "prefix": "{{triggerName}}-readJson",
    "body": [
      "fse.readJson(file, { throws: false })",
      ".then(obj => {",
      "  console.log(obj) // => null",
      "})",
      ".catch(err => {",
      "  console.error(err) // Not called",
      "})"
    ],
    "description": "[fs-extra][readJson][async][promise 模式] 支持读取错误 json 格式文件"
  },
  "[fs-extra][writeJson][async][callback 模式] ": {
    "prefix": "{{triggerName}}-writeJson",
    "body": [
      "/* ",
      "- file <String>",
      "- object <Object>",
      "- options <Object>",
      "  - spaces <Number> | <String> Number of spaces to indent; or a string to use for indentation (i.e. pass '\\t' for tab indentation). See the docs for more info.",
      "  - EOL <String> Set EOL character. Default is \\n.",
      "  - replacer JSON replacer",
      "  - Also accepts fs.writeFile() options",
      "- callback <Function>",
      "  - err <Error> ",
      "*/",
      "",
      "fse.writeJson('./package.json', {name: 'fs-extra'}, err => {",
      "  if (err) return console.error(err)",
      "  console.log('success!')",
      "})"
    ],
    "description": "[fs-extra][readJson][async][callback 模式] "
  },
  "[fs-extra][writeJson][async][promise 模式] ": {
    "prefix": "{{triggerName}}-writeJson",
    "body": [
      "/* ",
      "- file <String>",
      "- object <Object>",
      "- options <Object>",
      "  - spaces <Number> | <String> Number of spaces to indent; or a string to use for indentation (i.e. pass '\\t' for tab indentation). See the docs for more info.",
      "  - EOL <String> Set EOL character. Default is \\n.",
      "  - replacer JSON replacer",
      "  - Also accepts fs.writeFile() options",
      "- callback <Function>",
      "  - err <Error> ",
      "*/",
      "",
      "fse.writeJson('./package.json', {name: 'fs-extra'})",
      ".then(() => {",
      "  console.log('success!')",
      "})",
      ".catch(err => {",
      "  console.error(err)",
      "})"
    ],
    "description": "[fs-extra][writeJson][async][promise 模式] "
  },
  "[fs-extra][writeJson][async][async 模式] ": {
    "prefix": "{{triggerName}}-writeJson",
    "body": [
      "/* ",
      "- file <String>",
      "- object <Object>",
      "- options <Object>",
      "  - spaces <Number> | <String> Number of spaces to indent; or a string to use for indentation (i.e. pass '\\t' for tab indentation). See the docs for more info.",
      "  - EOL <String> Set EOL character. Default is \\n.",
      "  - replacer JSON replacer",
      "  - Also accepts fs.writeFile() options",
      "- callback <Function>",
      "  - err <Error> ",
      "*/",
      "",
      "try {",
      "  await fse.writeJson('./package.json', {name: 'fs-extra'})",
      "  console.log('success!')",
      "} catch (err) {",
      "  console.error(err)",
      "}"
    ],
    "description": "[fs-extra][writeJson][async][async 模式] "
  }
}
