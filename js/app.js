var app = angular.module('SuggestionBox', ['ngRoute']);

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

		.when('/starred/', {
    controller: 'StarredController',
    templateUrl: 'views/starred.html'
  	})

  	.otherwise({
  		redirectTo: '/'
  	});
});
