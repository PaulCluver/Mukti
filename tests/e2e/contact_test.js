describe('Contact Us Form', function() {	

	it('should not display the "Contact Us" panel', function() {
		browser.get('http://localhost:82/#/contact');
		expect(element(by.id('contact-us')).isDisplayed()).toBeFalsy();
	});

});