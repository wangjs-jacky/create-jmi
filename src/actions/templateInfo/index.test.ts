import { describe, expect, it } from "vitest";
import { compose } from "../../core/compose";
import { middleware_templateInfo } from ".";

describe("测试 templateInfo 中间件", () => {
  it("ctxRef.current 上存在 templateInfo 和 templateName 属性", () => {
    const middleware = [
      middleware_templateInfo,
      (next, ctxRef) => {
        expect(ctxRef.current).toMatchInlineSnapshot(`
          {
            "templateInfo": {
              "j-templata": {
                "description": "umi 源码工程",
                "questions": [
                  {
                    "message": "输入 npm 包的名称?",
                    "name": "name",
                    "type": "text",
                  },
                  {
                    "message": "输入 npm 包的描述?",
                    "name": "description",
                    "type": "text",
                  },
                  {
                    "message": "输入 email ?",
                    "name": "mail",
                    "type": "text",
                  },
                  {
                    "message": "输入作者名称 ?",
                    "name": "author",
                    "type": "text",
                  },
                  {
                    "message": "请输入仓库地址 ?",
                    "name": "repo",
                    "type": "text",
                  },
                  {
                    "choices": [
                      {
                        "title": "TypeScript",
                        "value": true,
                      },
                      {
                        "title": "JavaScript",
                        "value": false,
                      },
                    ],
                    "message": "选择开发语言",
                    "name": "isTypeScript",
                    "type": "select",
                  },
                  {
                    "active": "yes",
                    "inactive": "no",
                    "initial": false,
                    "message": "是否需要安装 UMI UI?",
                    "name": "withUmiUI",
                    "type": "toggle",
                  },
                ],
              },
              "j-template": {
                "description": "测试模板工程-2",
                "questions": [
                  {
                    "message": "What is foo?",
                    "name": "foo",
                    "type": "text",
                  },
                ],
              },
              "j-template2": {
                "description": "测试模板工程-3",
                "questions": [
                  {
                    "message": "What is your GitHub username?",
                    "name": "username",
                    "type": "text",
                  },
                  {
                    "message": "How old are you?",
                    "name": "age",
                    "type": "number",
                  },
                  {
                    "initial": "Why should I?",
                    "message": "Tell something about yourself",
                    "name": "about",
                    "type": "text",
                  },
                ],
              },
            },
            "templateName": "j-template",
          }
        `)
        next();
      }
    ];
    compose(middleware, {
      ctx: { templateName: "j-template" }
    });
  })
})