# batchAssert
Assert testing module for explicit pass/fail console output, with optional AssertionError bypass.
 * _Props to @SagePadawan for helping me out with this!_

## What is batchAssert?
#### batchAssert handles the execution of assert tests via deepEqual when provided an array of "test" objects:
```javascript
let testBatch = [
  { test: <equation>, result: <expected answer>, message: <Message to display on test failure> },
  { test: <equation>, result: <expected answer>, message: <Message to display on test failure> }
];
```
* **equation** can be any *value* or *function which returns a value*.
* **result** can be any *value* which **equation** is **expected to equal**.
* **message** is a *string* that will be printed if the test **fails**.

`batchAssert.testAll(testBatch)` <br>
 will execute an assert test for every object in the list, in the following manner:
 
 `assert.deepEqual(<test>, <result>, <message>)`<br>
 batchAssert will log each test's success or failure to the console, and AssertionErrors will still be thrown by any test that fails. If you prefer to bypass that behavior...
 
 `batchAssert.testAll(testBatch, false)` <br>
 ... passing _false_ as a second parameter will catch the error, allowing all remaining tests to still execute. The console message for a failed test will print the index of the failed test, as well as the message provided in the test object.
