angular.module('personalSite', ['ui.router', 'ui.bootstrap','ngStorage'])//include plugins in an array on the first line
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	$urlRouterProvider.otherwise("/about");
//	$locationProvider.html5Mode(true);

	//you define states in the config part of your app.js
	$stateProvider
	.state('resume', {
		url: "/resume",
		controller : 'ResumeCtrl',
		templateUrl : 'views/resume.html'
	})
	.state('about', {
		url: "/about",
		controller : 'AboutCtrl',
		templateUrl : 'views/about.html'
	})
	.state('projects', {
		url: "/projects",
		controller : 'ProjectsCtrl',
		templateUrl : 'views/projects.html'
	})

}).run(function($rootScope, $window, $sessionStorage) {
	$sessionStorage.style = 'bootstrap'
})