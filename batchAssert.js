const assert = require('assert');

let MissingArgumentError = new Error("One or more arguments missing from test object");

let assertTest = function ({ test, result, message }, index) {
  if (test === undefined ||
    message === undefined) {
    throw MissingArgumentError;
  }
  assert.deepStrictEqual(test, result, message);
  console.log(`Test ${index} passed.`);
}

let testAll = function (batch, throwOnFail = true) {
  if (throwOnFail) {
    batch.forEach((test, index) => { assertTest(test, index) });
  } else {
    batch.forEach((test, index) => {
      try {
        assertTest(test, index);
      } catch (AssertionError) {
        console.log(`Test ${index} FAILED: ${test.message}`)
      }
    });
  };
};

module.exports.testAll = testAll;
