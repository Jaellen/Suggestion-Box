app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

  $scope.a = suggestions.data_array.sort(function(a, b) {
      return b.upvotes - a.upvotes
  })

var test = function() {
  for (i=0 ; i < 7 ; i++) {
    console.log($scope.a[i].title);
  };
};

test();
console.log("");
//--------------------------------------------------------------------------//

  $scope.addSuggestion = function() {

          if(!$scope.title || $scope.title === "") {
            return;
          };

          $scope.a.push({
            title: $scope.title,
            upvotes: 0,
            comments: [],
            star: false
          });

          $scope.title = '';
      };

//--------------------------------------------------------------------------//

  $scope.upVote = function(b) {

    b.upvotes += 1;

    var index1 = $scope.a.indexOf(b);
    var index2 = index1 - 1;

    console.log(index1);
    console.log($scope.a[index1].upvotes);

    console.log(index2);
    console.log($scope.a[index2].upvotes);

    if ($scope.a[index1].upvotes > $scope.a[index2].upvotes) {

          Array.prototype.move = function (old_index, new_index) {
              if (new_index >= this.length) {
                  var k = new_index - this.length;
                  while ((k--) + 1) {
                      this.push(undefined);
                  }
              }
              this.splice(new_index, 0, this.splice(old_index, 1)[0]);
              return this; // for testing purposes
          };

          $scope.a.move(index1, index2);
    };

    console.log("test");
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

//--------------------------------------------------------------------------//

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
