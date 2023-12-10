import { describe, expect, it } from "vitest";
import { getGitInfo, middleware_getGitInfo } from ".";
import { compose } from "../../core/compose";

describe("测试 getGitInfo 中间件", () => {
  /* vitest 必须使用 ()=> new Promise((done)=>done())  */
  it("ctxRef.current 上存在 gitInfo 属性", () => new Promise<void>((done) => {
    compose([
      middleware_getGitInfo,
      (next, ctxRef) => {
        expect(ctxRef.current).toMatchInlineSnapshot(`
          {
            "gitInfo": {
              "email": "2409277719@qq.com",
              "username": "所无聊",
            },
          }
        `);
        done();
      }
    ])
  }))
})