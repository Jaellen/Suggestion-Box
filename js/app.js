var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
  	.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  	})

  	.when('/suggestion/:id', {
    controller: 'SuggestionController',
    templateUrl: 'views/suggestion.html'
  	})

  	.otherwise({
  		redirectTo: '/'
  	});
});
