app.controller('CommentsController', ['$scope', 'suggestions','$routeParams', function($scope, suggestions, $routeParams) {

  $scope.post =  suggestions.posts[$routeParams.id];

  // push comment post in suggestion.js
  $scope.addComment = function()
  {
    //if input empty, don't submit
    if(!$scope.comments || $scope.comments === "") {
      return;
    };

    //push comment in suggestions.js
    $scope.post.push({
      body: $scope.comments,
      upvotes: 0,
    });

    //after submit, clear input
    $scope.comments = '';
  };

  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  };

}]);
