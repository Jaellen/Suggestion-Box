app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  /* This is craeting an AngularJs object called 'a' which we are connecting the service
  'suggestions' to and passing the data_array*/
  $scope.a = suggestions.data_array;

  /* This function is used to add new suggestion to the data_array*/
  $scope.addSuggestion = function()
    {
      //if input empty, don't submit
      if(!$scope.title || $scope.title === "") {
        return;
      };

console.log("TEST");

      //push new suggestion post into data_array
      $scope.a.push({
        title: $scope.title,  // here we are pushing the user input angular object a
        upvotes: 0,
        comments: []
      });

      //after submit, clear input
      $scope.title = '';
    };

    // a function that increases the upvote by one each time clicked
    $scope.upVote = function(b) {
      b.upvotes += 1;
    };



}]);
