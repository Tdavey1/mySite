angular.module("personalSite")
.controller("ResumeCtrl", function($scope,$http) {
	
	$scope.technologies = ["HTML","CSS","javascript","AngularJs","NodeJs","MySQL","python"];

	$scope.education = { 
		cornell: {
			universityName:"Cornell University",
			collegeName:"College of Agricultrue and Life Sciences",
			degree:"Bachelor of Science in Biological Sciences with Business Minor",
			gpa:3.54, 
			timeFrame:"august 2013-may 2016", 
			award:"Graduated cum laude with distinction in research",
			graduationDate:"may 2016",
			location: "Ithaca, NY"
		},
		NYU: {
			universityName:"New York University",
			collegeName:"College of Arts and Sciences",
			gpa:3.36, 
			timeFrame:"august 2012-may 2013", 
			location: "New York, NY"
		}
	};

	$scope.experiences = {
		Queens: {
			organization:"Stress in Pregnency (SIP) Study, Queens College",
			jobTitle:"Project Manager",
			location: "Queens, NY",
			timeFrame: "June 2016-November 2016",
			jobDescription: [
				"Managed team to develop an app for lab data entry",
				"used HTML, Twitter bootstrap, AngularJs for the front end",
				"used NodeJs, MySQL for the back end"
				]
		}
	}

});