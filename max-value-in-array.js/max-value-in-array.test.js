const {
  maxValueUsingForLoop,
  maxValueUsingSort
} = require("../max-value-in-array.js/max-value-in-array");

describe("maxValueInArray", () => {
  it("should return 5", () => {
    let myArray = [1, 2, 3, 4, 5];
    expect(maxValueUsingForLoop(myArray)).toBe(5);
    expect(maxValueUsingSort(myArray)).toBe(5);
  });
  it("should return 10", () => {
    let myArray = [2, 4, 6, 8, 10];
    expect(maxValueUsingForLoop(myArray)).toBe(10);
    expect(maxValueUsingSort(myArray)).toBe(10);
  });
  it("should return 10", () => {
    let myArray = [-10, -5, 0, 2, 7];
    expect(maxValueUsingForLoop(myArray)).toBe(7);
    expect(maxValueUsingSort(myArray)).toBe(7);
  });
});
