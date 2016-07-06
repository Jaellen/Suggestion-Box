app.controller('CommentsController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

  $scope.x =  suggestions.data_array[$routeParams.id];

//--------------------------------------------------------------------------//

  $scope.addComment = function()
  {
    if(!$scope.titleB || $scope.titleB === "") {
      return;
    };

    $scope.x.comments.push({
      body: $scope.titleB,
      upvotes: 0
    });

    $scope.titleB = '';
  };

//--------------------------------------------------------------------------//

  $scope.upVote = function(y) {
    y.upvotes += 1;
  };

}]);
