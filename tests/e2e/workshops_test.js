describe('Workshops list', function() {	

	it('should filter the results', function() {
		browser.get('http://localhost:82/#/workshops');
		element(by.model('workshopFilter')).sendKeys('banda');
		expect(element.all(by.repeater('workshop in workshops')).count()).toEqual(2);
	});

});