app.controller('SuggestionController', ['$scope', 'suggestions','$routeParams', function($scope, suggestions, $routeParams) {



  $scope.post =  suggestions.posts[$routeParams.id];

  // push comment post in suggestion.js
  $scope.addComment = function()
  {
    $scope.post.push({
      body: $scope.comments,
      upvotes: 0,
    });
  };

  $scope.upVote = function(comment) {
    comment.upvotes += 1;
  };


}]);
