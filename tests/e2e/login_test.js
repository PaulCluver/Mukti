describe('Login Form', function() {

    beforeEach(function(){
        browser.get('http://localhost:8888/#/login');
    });

    it('should log the user in when given a valid username and password', function($scope) {
    	var user = {
            email : 'test@test.com',
            password: 'secret'
        };

    	element(by.model('user.email')).sendKeys('test@test.com');
    	element(by.model('user.password')).sendKeys('secret');
    	element(by.id('loginButton')).click();
    	expect($scope.loginDetails).toEqual(user);
    })
});
