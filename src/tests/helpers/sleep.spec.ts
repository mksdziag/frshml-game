import { sleep } from "../../helpers/sleep";

describe("sleep", () => {
  it("Delays code for certain amount of time(ms)", async () => {
    const targetDelay = 100;
    const start = Date.now();
    await sleep(targetDelay);
    const end = Date.now();
    const timeDiff = end - start;

    expect(timeDiff).toBeGreaterThanOrEqual(targetDelay);
  });
});
