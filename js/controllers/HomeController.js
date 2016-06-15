app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  $scope.hello = "Angular Test";
  $scope.posts = suggestions.posts;

}]);
