app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  $scope.a = suggestions.data_array;

//--------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------//

    $scope.upVote = function(b) {
        b.upvotes += 1;
    };

//--------------------------------------------------------------------------//

    $scope.star = function(b) {
      
    var index = suggestions.data_array.indexOf(b);

       if (b.star === true) {
         b.star = false;
         document.getElementsByClassName('icon-star')[index].setAttribute("src", "img/star.png");
       }
       else if (b.star === false) {
         b.star = true;
         document.getElementsByClassName('icon-star')[index].setAttribute("src", "img/star-active.png");
       }
       else return;
    };

}]);
