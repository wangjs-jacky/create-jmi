import { describe, expect, it } from "vitest";
import { compose } from "../../core/compose";
import { middleware_pkgInfo } from ".";

describe("测试 pkgInfo 中间件", () => {
  it("ctxRef.current 上存在 originPackageJson 和 originVersion 属性", () => {
    const middleware = [
      middleware_pkgInfo,
      (next, context) => {
        expect(context.current).toMatchInlineSnapshot(`
          {
            "originPackageJson": {
              "author": "",
              "bin": {
                "jmi": "./bin/jmi.js",
              },
              "dependencies": {
                "cac": "^6.7.14",
                "chalk": "^4.0.0",
                "execa": "^8.0.1",
                "fs-extra": "^11.2.0",
                "glob": "^10.3.10",
                "mustache": "^4.2.0",
                "prompts": "^2.4.2",
              },
              "description": "模板代码快速创建脚手架",
              "devDependencies": {
                "@types/node": "^20.10.4",
                "father": "^4.3.7",
                "tsup": "^8.0.1",
                "typescript": "^5.3.3",
                "vitest": "^1.0.2",
              },
              "files": [
                "bin",
                "cjs",
                "esm",
                "templates",
              ],
              "keywords": [],
              "license": "ISC",
              "main": "index.js",
              "name": "create-jmi",
              "scripts": {
                "build": "father build",
                "test:force": "vitest run -u",
                "test:unit": "vitest run",
                "watch": "father dev",
              },
              "version": "1.0.0",
            },
            "originVersion": "1.0.0",
          }
        `)
        next();
      }
    ];

    compose(middleware);
  })
})