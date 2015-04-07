describe('Workshops list', function() {

	beforeEach(function () {
		browser.ignoreSynchronization = true;
	});

	it('should filter the results', function() {
		element(by.model('workshopFilter')).sendKeys('banda');
		expect(element.all(by.repeater('workshop in workshops')).count()).toEqual(2);
	});
});