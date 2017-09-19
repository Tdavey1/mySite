angular.module('personalSite', ['ui.router', 'ui.bootstrap','ngStorage','uiRouterStyles'])

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
	.state('projects.quote', {
		url: "/projects/quote",
		controller : 'QuoteCtrl',
		templateUrl : 'views/quote.html',
		data: {
			css: 'styles/quote.css'
		}
	})
	.state('projects.weather', {
		url: "/projects/weather",
		controller : 'WeatherCtrl',
		templateUrl : 'views/weather.html',
		data: {
			css: ["styles/weather.css","https://websygen.github.io/owfont/css/owfont-regular.css"]
		}
	})
	.state('projects.wikipedia', {
		url: "/projects/wikipedia",
		controller : 'WikipediaCtrl',
		templateUrl : 'views/wikipedia.html',
		data: {
			css: 'styles/wikipedia.css'
		}
	})
	.state('projects.twitch', {
		url: "/projects/twitch",
		controller : 'TwitchCtrl',
		templateUrl : 'views/twitch.html',
		data: {
			css: 'styles/twitch.css'
		}
	})
	.state('projects.calculator', {
		url: "/projects/calculator",
		controller : 'CalculatorCtrl',
		templateUrl : 'views/Calculator.html',
		data: {
			css: 'styles/calculator.css'
		}
	})
	.state('projects.pomodoro', {
		url: "/projects/pomodoro",
		controller : 'PomodoroCtrl',
		templateUrl : 'views/pomodoro.html',
		data: {
			css: 'styles/pomodoro.css'
		}
	})
	.state('projects.ticTacToe', {
		url: "/projects/tic-tac-toe",
		controller : 'TicTacToeCtrl',
		templateUrl : 'views/ticTacToe.html',
		data: {
			css: 'styles/ticTacToe.css'
		}
	})
	.state('projects.simon', {
		url: "/projects/simon",
		controller : 'SimonCtrl',
		templateUrl : 'views/simon.html',
		data: {
			css: 'styles/simon.css'
		}
	})


}).run(function($rootScope, $window/*, $sessionStorage*/) {

})