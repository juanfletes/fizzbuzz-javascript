const fizzbuzz = require("./fizzbuzz");
describe("fizzbuzz", () => {
  test("should thrown a error if argument is not a number", () => {
    expect(() => fizzbuzz("is not a number")).toThrow();
  });

  test("should print 1 if they recibe 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test("should print fizz if they recibe 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test("should print fizz if they recibe a multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test("should print buzz if they recibe 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test("should print buzz if they recibe a multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(25);
    expect(expected).toBe(result);
  });

  test("should print fizz if they recibe a multiple of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
});
