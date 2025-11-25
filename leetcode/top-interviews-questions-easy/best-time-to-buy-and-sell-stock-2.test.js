import { maxProfit } from "./best-time-to-buy-and-sell-stock-2";

test("removeElement test", () => {
  const nums = [7, 1, 5, 3, 6, 4];
  const val = 7;
  const result = maxProfit(nums);
  expect(result).toBe(val);
});
