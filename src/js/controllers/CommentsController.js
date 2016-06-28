app.controller('CommentsController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

  /* This is craeting an AngularJs object called 'x' which we are connecting the service
  'suggestions' to and passing the data_array comment with the current ID*/
  $scope.x =  suggestions.data_array[$routeParams.id];

  /* This function is used to add a new comment to the data_array with the current ID*/
  $scope.addComment = function()
  {
    //if input empty, don't submit
    if(!$scope.titleB || $scope.titleB === "") {
      return;
    };

    //push comment into the 'comments' attribute of the data_array
    $scope.x.comments.push({
      body: $scope.titleB,
      upvotes: 0
    });

    //after submit, clear input
    $scope.titleB = '';
  };

  // a function that increases the upvote by one each time clicked
  $scope.upVote = function(y) {
    y.upvotes += 1;
  };



}]);
