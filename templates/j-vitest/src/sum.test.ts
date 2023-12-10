import { describe, expect, it } from "vitest";

const sum = (a: number, b: number) => a + b;
const asyncSum = async (a: number, b: number) => {
  return await a + b;
}

describe("sum 函数单元测试", () => {
  it("测试函数功能 ", () => {
    expect(sum(1, 2)).toMatchInlineSnapshot(`3`)
  })

  it("测试异步函数功能 ", () => new Promise<void>(async (done) => {
    expect(await asyncSum(1, 2)).toMatchInlineSnapshot(`3`)
    done();
  }))
})