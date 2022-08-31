const getOutput = require("./Divisibility.js");

describe("Divisibility", () => {
  it("should return No if the last digits of the given input is not divisible by 10", () => {
    expect(getOutput("5\n85 25 65 21 84")).toEqual("No");
  });

  it("should return Yes if the last digit of the given input is divisible by 10", () => {
    expect(getOutput("5\n85 25 65 21 80")).toEqual("Yes");
  });

  it("should return Yes for the given input irrespective of the new line character", () => {
    expect(getOutput("3\n85 21 80\n")).toEqual("Yes");
  });
});
