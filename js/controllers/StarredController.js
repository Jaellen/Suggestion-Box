app.controller('StarredController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

      $scope.showComments = false;
      $scope.a = suggestions.data_array;
      
//---------------------------------------------------------------------------//
  $scope.addComment = function(id) {

      if(!$scope.a.comments || $scope.a.comments === "") {
        return;
      };

      $scope.a[id].comments.push({
        body: $scope.a.comments,
        upvotes: 0
      });

      $scope.a.comments = '';
  };

}]);
