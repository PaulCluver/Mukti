describe('Login Form', function($cookieStore) {

    beforeEach(function(){
        browser.get('http://localhost:8888/#/login');
    });

    it('should log the user in when given a valid username', function($cookieStore) {    	
    	element(by.model('_userName')).sendKeys('PaulCL');
    	element(by.id('loginButton')).click();
        var authenticated = $cookieStore.get('userDetails')['authenticated'];
        expect(authenticated).toEqual(1);
    })
});
