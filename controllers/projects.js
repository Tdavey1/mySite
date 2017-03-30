angular.module('personalSite')
.controller('ProjectsCtrl', function($scope) {

	$scope.viewProject = false;

	$scope.viewAll = true;

	$scope.changeDisplay = function() {
		$scope.viewProject = !$scope.viewProject;
		$scope.viewAll = !$scope.viewAll;
	}

	$scope.libraries = [
		{
			name:"jQuery",
			color: "#0769ad",
			img: "images/jQueryLogo.png",
			projects: [
				{
					name: "Random Quote Generator",
					img: "images/quote.png",
					sref: ".quote"
				},

				{
					name: "Local Weather",
					img: "images/weather.png",
					sref: ".weather"
				},

				{
					name: "Wikipedia Viewer",
					img: "images/wikipedia.png",
					sref: ".wikipedia"
				},

				{
					name: "Twitch Api",
					img: "images/twitch.png",
					sref: ".twitch"
				},


				{
					name:"Calculator",
					img: "images/calculator.png",
					sref: ".calculator"
				},

				{
					name: "Pomodoro Clock",
					img: "images/pomodoro.png",
					sref: ".pomodoro"
				},

				{
					name: "Tic-Tac-Toe",
					img: "images/weather.png",
					sref: ".tictactoe"
				}

			]
		},
		{
			name:"ANGULARJS",
			color: "#de1914",
			img: "images/angularLogo.png",
			projects: [
				{
					name: "Random Quote Generator",
					img: "images/quote.png",
					sref: ".quote"
				}
			]
		}

	]

});