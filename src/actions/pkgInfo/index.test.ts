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
                "jj": "./bin/jj.js",
              },
              "dependencies": {
                "@types/node": "^20.10.4",
                "chalk": "^4.0.0",
                "execa": "^8.0.1",
                "fs-extra": "^11.2.0",
                "glob": "^10.3.10",
                "mustache": "^4.2.0",
                "prompts": "^2.4.2",
                "tsup": "^8.0.1",
                "typescript": "^5.3.3",
              },
              "description": "",
              "devDependencies": {
                "cac": "^6.7.14",
                "vitest": "^1.0.2",
              },
              "keywords": [],
              "license": "ISC",
              "main": "index.js",
              "name": "create-jacky-2",
              "scripts": {
                "build": "tsup",
                "start": "tsup --watch",
                "test:force": "vitest run -u",
                "test:unit": "vitest run",
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