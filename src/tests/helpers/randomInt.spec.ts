import { randomInt } from "../../helpers/randomInt";

describe("randomInt", () => {
  it("Returns random int from provided range", () => {
    const result1 = randomInt(20, 20);
    expect(result1).toBe(20);

    const result2 = randomInt(0, 0);
    expect(result2).toBe(0);

    const result3 = randomInt(0, 100);
    expect(result3).toBeGreaterThan(-1);
    expect(result3).not.toBeGreaterThan(100);

    const result4 = randomInt(20, 25);
    expect(result4).toBeGreaterThanOrEqual(20);
    expect(result4).not.toBeGreaterThan(25);
  });
});
