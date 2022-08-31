const getOutput = require("./Zoos.js");

describe("zoos", () => {
  it("should return true for zoo input string", () => {
    expect(getOutput("zoo")).toEqual("Yes");
  });

  it("should return false for zzoo input string", () => {
    expect(getOutput("zzoo")).toEqual("No");
  });

  it("should return true for zzoooo input string", () => {
    expect(getOutput("zzoooo")).toEqual("Yes");
  });
});
