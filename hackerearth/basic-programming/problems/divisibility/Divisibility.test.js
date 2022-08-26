const { expect } = require("chai");
const getOutput = require("./Divisibility.js");

describe("Divisibility", () => {
  it("should return No if the last digits of the given input is not divisible by 10", () => {
    expect(getOutput("5\n85 25 65 21 84")).to.equal("No");
  });

  it("should return Yes if the last digits of the given input is divisible by 10", () => {
    expect(getOutput("5\n85 25 65 21 80")).to.equal("Yes");
  });

  it("should return Yes if the last digits of the given input is divisible by 10", () => { // Test name is same as above
    expect(getOutput("3\n85 21 80")).to.equal("Yes");
  });
});
