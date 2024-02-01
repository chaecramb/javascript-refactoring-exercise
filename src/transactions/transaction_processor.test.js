const sortAndQuantifyTransactions = require("./transaction_processor");

test("check transaction processing when empty", () => {
  expect(sortAndQuantifyTransactions([])).toEqual([]);
});

test("check transaction processing exception thrown when null passed", () => {
  expect(() => sortAndQuantifyTransactions(null)).toThrow();
});

test("check single transaction", () => {
  expect(sortAndQuantifyTransactions(["jumper"])).toEqual(["jumper 1"]);
});

test("check multiple transactions same item", () => {
  expect(sortAndQuantifyTransactions(["jumper", "jumper"])).toEqual([
    "jumper 2",
  ]);
});

test("check multiple transactions multiple items", () => {
  expect(sortAndQuantifyTransactions(["jumper", "jeans", "jeans"])).toEqual([
    "jeans 2",
    "jumper 1",
  ]);
});

test("check multiple transactions alphabetical ordering correct", () => {
  expect(sortAndQuantifyTransactions(["jumper", "jeans"])).toEqual([
    "jeans 1",
    "jumper 1",
  ]);
});

test("check multiple transactions numerical order correct", () => {
  expect(sortAndQuantifyTransactions(["hoody", "jeans", "jeans"])).toEqual([
    "jeans 2",
    "hoody 1",
  ]);
});

test("notebook example from the readme", () => {
  expect(
    sortAndQuantifyTransactions([
      "notebook",
      "notebook",
      "mouse",
      "keyboard",
      "mouse",
    ])
  ).toEqual(["mouse 2", "notebook 2", "keyboard 1"]);
});
