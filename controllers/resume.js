angular.module("personalSite")
.controller("ResumeCtrl", function($scope,$http) {
	
	$scope.education = { 
		cornell: {
			universityName:"Cornell University",
			collegeName:"College of Agriculture and Life Sciences",
			degree:"Bachelor of Science in Biological Sciences, ",
			minor: "Business minor",
			gpa:3.54, 
			timeFrame:"2013-2016", 
			award:"Graduated cum laude with distinction in research",
			graduationDate:"May 2016"
		},
		NYU: {
			universityName:"New York University",
			collegeName:"College of Arts and Sciences",
			gpa:3.36, 
			timeFrame:"2012-2013"
		}
	};

	$scope.softwareExperiences = {
		Queens: {
			jobTitle:"Project Manager",
			location: "Psychology department, Queens, NY",
			timeFrame: "June 2016-November 2016",
			details: [
				"Managed team to develop an app for data entry",
				"Used HTML, Bootstrap, and AngularJs for the front end",
				"Used Node.js and MySQL for the back end"
				]
		}
	};

	$scope.otherExperiences = {
		cornellRA: {
			jobTitle:"Research Assistant",
			location: "Entomology department, Cornell University, Ithaca, NY",
			timeFrame: "Spring 2015 – Spring 2016",
			details: [
				"Studied population dynamics of Musca Domesica",
				"DNA extraction, PCR, Gel electrophoresis, DNA cloning"
			]
		},
		broaderView: {
			jobTitle:"A Broader View",
			location: "La Ceiba, Honduras",
			timeFrame: "Winter 2015",
			details: [
				"Assisted dentists in a dental clinic",
				"Organize patient files"
			]
		},
		queensRA: {
			jobTitle:"Research Assistant",
			location: "Psychology department, Queens College, Queens, NY",
			timeFrame: "Summers 2012/2013",
			details: [
				"Studied effects of stress on children of pregnant women for longitudinal birth cohort study",
				"Patient recruitment, tissue powderization and DNA extraction "
			]
		}
	};


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
});