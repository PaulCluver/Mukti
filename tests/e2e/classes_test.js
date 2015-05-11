describe('Workshops list', function() {	

	it('should filter the results', function() {
		browser.get('http://localhost:82/#/classes');
		element(by.model('classesFilter')).sendKeys('ashtanga');
		expect(element.all(by.repeater('class in classes')).count()).toEqual(1);
	});

});