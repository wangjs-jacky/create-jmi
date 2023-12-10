import { describe, expect, it } from "vitest";
import { compose } from "../../core/compose";
import { middleware_create } from ".";
import { middleware_copyDirectory } from "../copyDirectory";
import { middleware_templateInfo } from "../templateInfo";
import { join } from "path";

it("测试 generate 模板拷贝", () => {
  const middleware = [
    middleware_templateInfo,
    middleware_copyDirectory,
    middleware_create,
  ];
  compose(middleware, {
    ctx: {
      templateName: "j-template",
      targetDir: join(__dirname, "fixtures"),
      mustacheParams: {
        foo: "123"
      }
    }
  });
})