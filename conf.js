exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
         'app/controllers/*/*/*_test.js'
	]
}