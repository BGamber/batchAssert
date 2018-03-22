const assert = require('assert');

let MissingTestError = new Error("Test was not defined in test object");

let assertTest = function ({ test, result, message }, index) {
  if (test === undefined) {
    throw MissingTestError;
  }
  if (message) {
    assert.deepStrictEqual(test, result, message);
  } else {
    assert.deepStrictEqual(test, result);
  };
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
        let defaultMessage = `${AssertionError.actual} ${AssertionError.operator} ${AssertionError.expected}`
        console.log(`Test ${index} FAILED: ${(test.message ? test.message : defaultMessage)}`)
      }
    });
  };
};

module.exports.testAll = testAll;