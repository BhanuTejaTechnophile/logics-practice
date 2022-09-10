const getOutput = require("./FindProduct.js");

describe("FindProduct", () => {
  it("should get the product of given integers", () => {
    expect(getOutput("5\n1 2 3 4 5")).toEqual(120);
  });
});
