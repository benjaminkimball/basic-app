import { flattenParam } from "./flattenParam";

describe("flattenParam()", () => {
  it("returns undefined by default", () => {
    const result = flattenParam();

    expect(result).toBeUndefined();
  });

  it("handles string arrays", () => {
    const param = ["foo", "bar", "baz"];
    const result = flattenParam(param);

    expect(result).toStrictEqual(param[0]);
  });

  it("handles strings", () => {
    const param = "foo";
    const result = flattenParam(param);

    expect(result).toStrictEqual(param);
  });
});
