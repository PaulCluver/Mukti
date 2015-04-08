exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../app/controllers/*/*_test.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:82/#',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};