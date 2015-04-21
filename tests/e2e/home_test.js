describe("hello world", function() {
    var $rootScope;
    var $controller;
    beforeEach(module("yogaApp"));
    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $scope = $rootScope.$new();

    }));
    beforeEach(inject(function($controller) {
        YourControllerHere = $controller("homeCtrl");

    }));

    it("Should say hello", function() {
        expect(YourControllerHere.message).toBe("Hello");
    });

});