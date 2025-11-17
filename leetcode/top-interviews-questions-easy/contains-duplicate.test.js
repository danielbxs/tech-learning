import { containsDuplicate } from "./contains-duplicate";

test("containsDuplicate test", () => {
  const nums = [1, 2, 2, 3, 4, 5];
  const result = containsDuplicate(nums);
  expect(result).toBe(true);
});
