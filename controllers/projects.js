angular.module('personalSite')
.controller('ProjectsCtrl', function($scope, $uibModal) {

	$scope.openModal = function(project) {
		var modalInstance = $uibModal.open({
			templateUrl: 'views/projectModal.html',
			controller: 'ModalCtrl',
			resolve: {
				project: function() {
					return project;
				}
			}
		})

		modalInstance.opened.then(function () {

		});
		modalInstance.result.then(function () {

		});
		modalInstance.result.catch(function(){

		});

	}

	$scope.technologies = [
		{
			name:"jQuery",
			color: "#0769ad",
			img: "images/jQueryLogo.png",
			projects: [
/*
				{
					name: "Random Quote Generator",
					img: "images/quote.png",
					html: ".quote",
					css: "css",
					ctrl: "ctrl"
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

*/
				{
					name:"Calculator",
					img: "images/calculator.png",
					html: "views/calculator.html",
					css: "styles/calculator.css",
					ctrl: "CalculatorCtrl"
				},

				{
					name: "Pomodoro Clock",
					img: "images/pomodoro.png",
					html: "views/pomodoro.html",
					css: "styles/pomodoro.css",
					ctrl: "PomodoroCtrl"
				},

				{
					name: "Tic-Tac-Toe",
					img: "images/ticTacToe.png",
					html: "views/ticTacToe.html",
					css: "styles/ticTacToe.css",
					ctrl: "TicTacToeCtrl"
				},
				{
					name: "Simon",
					img: "images/simon.png",
					html: "views/simon.html",
					css: "styles/simon.css",
					ctrl: "SimonCtrl"
				}

			]
		},
		{
			name:"ANGULARJS",
			color: "#de1914",
			img: "images/angularLogo.png",
			projects: [
				{
					name: "2048",
					img: "images/2048.png",
					html: "views/2048.html",
					css: "styles/2048.css",
					ctrl: "2048Ctrl"
				},
				{
					name: "Sticky notes",
					img: "images/stickyNotes.png",
					html: "views/stickyNotes.html",
					css: "styles/stickyNotes.css",
					ctrl: "StickyNotesCtrl"
				},
				{
					name: "Grocery list",
					img: "images/groceryList.png",
					html: "views/groceryList.html",
					css: "styles/groceryList.css",
					ctrl: "GroceryListCtrl"
				}
			]
		}

	]

});