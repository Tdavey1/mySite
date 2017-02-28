angular.module("personalSite")
.controller("ResumeCtrl", function($scope,$http) {
	
	$scope.education = { 
		cornell: {
			universityName:"Cornell University",
			collegeName:"College of Agriculture and Life Sciences",
			degree:"BS in Biological Sciences",
			minor: "Business minor",
			gpa:3.54, 
			timeFrame:"2013-2016", 
			award:"Graduated cum laude with distinction in research",
			graduationDate:"May 2016"
		},
		freeCodeCamp: {
			universityName: "freeCodeCamp",
			degrees: ["Front End Development Certification"],
			graduationDate: "March 2016"
		}/*,
		NYU: {
			universityName:"New York University",
			collegeName:"College of Arts and Sciences",
			gpa:3.36, 
			timeFrame:"2012-2013"
		}
		*/
	};

	$scope.workExperiences = {
		Queens: {
			jobTitle:"Project Manager",
			location: "Queens College",
			timeFrame: "Jun. 2016 - present",
			details: [
				"Manage a team to design a database for existing data and develop an app that allows users to enter, edit, and view data",
				"Uses long-polling to update data in real time and prevent double entry",
				"Uses HTML, Bootstrap, and AngularJs for the front end",
				"Uses Node.js and MySQL for the back end"
				]
		}
	};


	$scope.personalProjects = {
		ticTacToe: {
			name:"Tic-Tac-Toe",
			details: [
				"Play tic-tac-toe with another person or a computer",
				"Uses the minimax algorithm to calculate AI moves",
				"Made with JavaScript, jQuery, and Bootstrap"
			]
		},
		pomodoro: {
			name: "Pomodoro Clock",
			details: [
				"User can set work time and break time",
				"Cycles through work and break represented with different colors",
				"Made with JavaScript, jQuery, and Bootstrap"
			]
		}
	}




/*
	$scope.otherExperiences = {
		cornellRA: {
			jobTitle:"Research Assistant",
			location: "Cornell University",
			timeFrame: "Apr. 2015 – May 2016",
			details: [
				"Studied population dynamics of the housefly",
				"Performed DNA extraction, PCR, Gel electrophoresis, DNA cloning"
			]
		},
		queensRA: {
			jobTitle:"Research Assistant",
			location: "Queens College",
			timeFrame: "Jun. – Aug. 2012 & 2013",
			details: [
				"Studied effects of stress on children of pregnant women for a longitudinal birth cohort study",
				"Recruited patients, powderized tissue, and extracted DNA"
			]
		}
	};
*/

/*
	$scope.activities = {
		redCross: {
			organization: "Red Cross club",
			location: "Cornell University, Ithaca, NY",
			details: [
				"Secretary Sept. 2013-May 2016",
				"Blood drives, Disaster Action Team, community work"
			],
			timeFrame: "Sept. 2013-May 2016"
		},
		Taekwondo: {
			organization: "Taekwondo club",
			location: "Cornell University, Ithaca, NY",
			timeFrame: "Sept. 2013-May 2016"
		}
	};
*/
});