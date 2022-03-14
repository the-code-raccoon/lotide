const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("middle([1]) returns []", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("middle[1, 2] returns []", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("middle([1, 2, 3]) returns [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("middle([1, 2, 3, 4, 5]) returns [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("middle([1, 2, 3, 4]) returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("middle([1, 2, 3, 4, 5, 6]) returns [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
