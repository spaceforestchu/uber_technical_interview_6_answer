const CharacterRemoval = require("./index");

describe("CharacterRemoval Function", () => {
  test("should throw an error if input is not an array", () => {
    expect(() => {
      CharacterRemoval("notAnArray");
    }).toThrow("Input must be an array");
  });

  test("should throw an error if input is an object", () => {
    expect(() => {
      CharacterRemoval({ word: "test" });
    }).toThrow("Input must be an array");
  });

  test("should return false if input array is empty", () => {
    expect(CharacterRemoval([])).toBe(false);
  });

  test("should return correct result for valid input array", () => {
    const input = ["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"];
    expect(CharacterRemoval(input)).toBe(2);
  });

  test("should return correct result for another valid input array", () => {
    const input = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"];
    expect(CharacterRemoval(input)).toBe(4);
  });

  test("should return the length of the word when all characters need to be removed to match", () => {
    const input = ["abcdef", "a,b,c,d,e,f"];
    expect(CharacterRemoval(input)).toBe(5);
  });

  test("should return 0 when the word is already in the dictionary", () => {
    const input = ["hello", "apple,bat,hello,world"];
    expect(CharacterRemoval(input)).toBe(0);
  });

  test("should return -1 when it is not possible to match any dictionary word", () => {
    const input = ["zzzz", "apple,bat,cat,hello,world"];
    expect(CharacterRemoval(input)).toBe(-1);
  });
});
