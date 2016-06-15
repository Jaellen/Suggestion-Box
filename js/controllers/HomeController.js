app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  $scope.posts = suggestions.posts;

}]);
