console.log("RUNNING UPDATED TEST FILE");
const { randomization } = require("./messages");
const test = require("node:test");
const assert = require("node:assert/strict");

test("generates a string", () => {
  console.log(typeof randomization);

  const result = randomization();
  assert.strictEqual(typeof result, "string");
});
test("generates a valid three-part message", () => {
  const result = randomization();
  const parts = result.split(" ");

  // Check the beginning
  const validBeginnings = ["I", "You", "We"];
  const isValidBeginning = validBeginnings.includes(parts[0]);

  assert.strictEqual(isValidBeginning, true);

  // Check the middle
  const validMiddle = ["can", "will", "must"];
  const isValidMiddle = validMiddle.includes(parts[1]);

  assert.strictEqual(isValidMiddle, true);

  const validEndings = ["succeed", "keep learning", "never give up"];

  const ending = parts.slice(2).join(" ");
  const isValidEnd = validEndings.includes(ending);

  assert.strictEqual(isValidEnd, true);
});
