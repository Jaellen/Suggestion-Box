app.controller('CommentsController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

  $scope.post =  suggestions.posts[$routeParams.id];

  // push comment post in suggestion.js
  $scope.addComment = function()
  {
    //if input empty, don't submit
    if(!$scope.comments.body || $scope.comments.body === "") {
      return;
    };

    //push comment in suggestions.js
    $scope.post.comments.push
    ({
      body: $scope.comments.body,
      upvotes: 0,
    });

    //after submit, clear input
    $scope.comments.body = '';
  };

  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  };

}]);
