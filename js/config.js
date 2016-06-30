app.config(function ($routeProvider) {
	$routeProvider
  	.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  	})

  	.when('/comments/:id', {
    controller: 'CommentsController',
    templateUrl: 'views/comments.html'
  	})

  	.otherwise({
  		redirectTo: '/'
  	});
});

export default app;
