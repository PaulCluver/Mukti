describe('contactCtrl', function() {

    var controller = null;
    $scope = null;

    beforeEach(function() {
        module('yogaApp');
    });

    beforeEach(inject(function($controller, $rootScope, $templateCache, $compile) {
        $scope = $rootScope.$new();
        controller = $controller('contactCtrl', {
            $scope: $scope
        });

    }));

    it('initially has an default contactDetails object', function() {
        assert.isObject($scope.contactDetails);
    });

    it('should set the user on the contactDetails when given inputs', function() {
        var user = {
            fname : 'Test',
            lname: 'User',
            email: 'test@test.com',
            comment_question: 'This is a comment'
        };

        $scope.update(user);
        assert.deepEqual(user, $scope.contactDetails);
    });

    it('should clear the contact details when reset', function() {
        var user = {
            fname : 'Test',
            lname: 'User',
            email: 'test@test.com',
            comment_question: 'This is a comment'
        };

        var clearUser = {};

        //$scope.reset(user);
        //assert.deepEqual(clearUser, $scope.contactDetails);
    });
    
});
