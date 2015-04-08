exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        tests: 'app/controllers/*/*_test.js'
    }
}