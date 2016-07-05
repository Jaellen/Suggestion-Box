app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  $scope.a = suggestions.data_array;

  $scope.addSuggestion = function() {
          //if input empty, don't submit
          if(!$scope.title || $scope.title === "") {
            return;
          };

          $scope.a.push({
            title: $scope.title,
            upvotes: 0,
            comments: []
          });

          $scope.title = '';
      };

    $scope.DeleteSuggestion = function(idx) {
       $scope.a.splice(idx, 1);
          };

    $scope.upVote = function(b) {
        b.upvotes += 1;
    };
}]);
