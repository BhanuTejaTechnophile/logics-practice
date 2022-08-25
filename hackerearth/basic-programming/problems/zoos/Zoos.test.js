const { expect } = require("chai");
const getOutput = require("./Zoos.js");

describe("zoos", () => {
  it("should return true for zoo input string", () => {
    expect(getOutput("zoo")).to.equal("Yes");
  });

  it("should return false for zzoo input string", () => {
    expect(getOutput("zzoo")).to.equal("No");
  });

  it("should return true for zoo input string", () => {
    expect(getOutput("zzoooo")).to.equal("Yes");
  });
});
