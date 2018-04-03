# batchassert
Assert testing module for explicit pass/fail console output, with optional AssertionError bypass.
 * _Props to [@SagePadawan](https://github.com/SagePadawan) for helping me out with this!_

## How to install batchassert:
`npm install batchassert`<br>
 * Yup, it's available via npm.

## What is batchassert?
#### batchassert handles the execution of assert tests via deepEqual when provided an array of "test" objects:
```javascript
let testBatch = [
  { test: <equation>, result: <expected answer>, message: <Message to display on test failure> },
  { test: <equation>, result: <expected answer>, message: <Message to display on test failure> }
];
```
* **equation** can be any *value* or *function which returns a value*.
* **result** can be any *value* which **equation** is **expected to equal**.
* **message** (optional) is a *string* that will be printed if the test **fails**.

`batchassert.testAll(testBatch)` <br>
 will execute an assert test for every object in the list, in the following manner:
 
 `assert.deepStrictEqual(<test>, <result>, <message>)`<br>
 _(or `assert.deepStrictEqual(<test>, <result>)` if message is left out.)_ <br>
 batchassert will log each test's success or failure to the console, and AssertionErrors will still be thrown by any test that fails. If you prefer to bypass that behavior...
 
 `batchassert.testAll(testBatch, false)` <br>
 ... passing _false_ as a second parameter will catch the error, allowing all remaining tests to still execute. The console message for a failed test will print the index of the failed test, as well as the test object's message (if included) or the AssertionError's default message (if not included).

### batchassert threw a 'MissingTestError'! What?!
If you leave out a **test** property in any "test" object then batchassert throws a **MissingTestError** to let you know that your test was incomplete. Double-check all of the tests in your list and make sure you provide values for all of them.
