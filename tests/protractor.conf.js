exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../app/controllers/workshops/workshops_test.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:82/#/workshops',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};