app.controller('StarredController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

    $scope.showComments = false;
    $scope.a = suggestions.data_array;
    $scope.pageClass = 'page-starred';

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

/*
  $scope.x =  suggestions.data_array[$routeParams.id];

// --------------------------------------------------------------------------//

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

$scope.updateStar = function() {

  console.log("test");

  for (i=0; i < $scope.a.length; i++) {

      if ($scope.a[i].star === true) {
        document.getElementsByClassName('icon-star')[i].setAttribute("src", "img/star-active.png")[i];
      };
  };
};

//---------------------------------------------------------------------------//

*/
