import { sleep } from "./sleep";

test("sleep", async () => {
  const start = Date.now();

  await sleep(100);
  const end = Date.now();

  expect(end - start).toBeGreaterThanOrEqual(100);
});
