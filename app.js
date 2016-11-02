angular.module('resume', ['ui.router', 'ui.bootstrap'])//include plugins in an array on the first line
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	$urlRouterProvider.otherwise("/skills");
	$locationProvider.html5Mode(true);


	//you define states in the config part of your app.js
	$stateProvider

	.state('skills', {
		url: "/skills",
		controller : 'SkillsCtrl',
		templateUrl : 'views/skills.html'
	})

}).run(function($rootScope, $window,$state) {
})