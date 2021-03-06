var app = angular.module('SuggestionBox', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
    })

    .when('/starred', {
    controller: 'StarredController',
    templateUrl: 'views/starred.html'
    })

    .otherwise({
    redirectTo: '/'
    });
});
