angular.module('personalSite')
.controller('ProjectsCtrl', function($scope) {

	$scope.viewProject = false;

	$scope.viewAll = true;

	$scope.changeDisplay = function() {
		$scope.viewProject = !$scope.viewProject;
		$scope.viewAll = !$scope.viewAll;
	}

	$scope.projects = {

		quote: {
			name: "Random Quote Generator",
			img: "images/quote.png",
			sref: ".quote"
		},
/*
		weather: {
			name: "Local Weather",
			img: "images/weather.png",
			sref: ".weather"
		},
*/
		wikipedia: {
			name: "Wikipedia Viewer",
			img: "images/wikipedia.png",
			sref: ".wikipedia"
		},
/*
		twitch: {
			name: "Twitch Api",
			img: "images/twitch.png",
			sref: ".twitch"
		},
*/
/*
		calculator: {
			name:"Calculator",
			img: "images/calculator.png",
			sref: ".calculator"
		},
*/
/*
		pomodoro: {
			name: "Pomodoro Clock",
			img: "images/pomodoro.png",
			sref: ".pomodoro"
		},

		tictactoe: {
			name: "Tic-Tac-Toe",
			img: "images/weather.png",
			sref: ".tictactoe"
		}
*/
	}

});