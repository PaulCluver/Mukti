describe('TestOneController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('yogaApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('workshopCtrl', {
      $scope: $scope
    });
  }));

  it('initially has a greeting', function () {
    assert.equal($scope.greeting, "Hello, World!");
  });

  it('Clicking the button changes the changes the greeting', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });

});