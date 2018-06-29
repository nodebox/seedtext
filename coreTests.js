import core from "./core.js";

console.log("\nStarting tests on core.js...\n");
testsPassed = false;
passedTests, failedTests = 0;
failedTestsDescriptions = []

// Fill with tests
var test1 = core.generateString()
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests
// Fill with tests

console.log(`\nTests finished. Passed all tests: ${testsPassed}`);
console.log(`\nSuccessful: ${passedTests},`);
console.log(`\nUnsuccessful: ${failed_tests}.\n`);

if (!testsPassed) {
    for (let i = 0; i < failedTests; i++) {
        console.log(`\n - Test failed. Reason: ${failedTestsDescriptions[i]}\n`);
    }
    console.log('\n');
    throw new Error('Some of the tests for this module failed. See decription printed above.')
}