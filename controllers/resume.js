angular.module("personalSite")
.controller("ResumeCtrl", function($scope,$http) {
	
	$scope.myInfo = [
		"(917) 797-0595",
		"td284@cornell.edu",
		"2 Deertrack Lane, Irvington, NY 10533"
	]

	$scope.education = [
		{
			name:"Cornell University, ",
			subTitle: "College of Agriculture and Life Sciences",
			info: [
				"B.S in Biological Sciences, <em>cum laude</em> with distinction in research",
				"GPA: 3.54, Minor in Business"
			],
			location: "Ithaca, New York",
			time: "May 2016"
		},
		/*{
			name:"New York University, ",
			subTitle: "College of Arts and Sciences"
			info: [
				"GPA: 3.36"
			],
			time:"2012-2013"
		},
		*/
		{
			name: "freeCodeCamp",
			info: [
				"Completed a 400-hour Front End Development Certification",
				"Relevent Coursework: jQuery, HTML, CSSS",
				"Verify <a target='_blank' href='https://www.freecodecamp.org/tdavey1/front-end-certification'>here</a>"
			],
			location: "freecodecamp.com",
			time: "April 2017",

		},
		{
			name: "CompTIA A+ Certification",
			info: [
				"Basic hardware and software support certification",
				"Verify <a target='_blank' href='https://www.certmetrics.com/comptia/public/verification.aspx'>here</a> with code 29M7NLYHKCR11Y50"
			],
			location: "CompTIA",
			time: "August 2017",
		},
		{
			name: "Data Structures and Algorithms Certifications",
			info: [
				"Data Structures: Verify <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/8JDRKQR4E39C'>here</a>",
				"Algorithm Toolbox: Verify <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/7UVJUD9E9C97'>here</a>",
				"Algorithms on Graphs: Verify <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/MW2QAZG5AJTW'>here</a>",
				"Algorithms on Strings: Verify <a target='_blank' href='https://www.coursera.org/account/accomplishments/certificate/MMQFXEJ6J8GF'>here</a>"

				
			],
			location: "University of California, San Diego",
			time: "September 2017",
		},
		{
			name: "Linear Algebra Certification",
			info: [
				"Verify <a target='_blank' href='https://courses.edx.org/certificates/a7c52cab3d9145a5b57f27f46993cbeb'>here</a>"
			],
			location: "University of Texas System",
			time: "September 2017",
		}
	];

	$scope.workExperiences = [
		{
			name:"Database Manager",
			organization: "Queens College, Psychology Department",
			info: [
				"Managed a team to design a database that efficiently organized over 10 years’ worth of existing lab data",
				"Developed a web app that allows users to enter, edit, and view data both on and off campus",
				"Collaborated with lab members to design and update user interface based on feedback",
				"Front end technologies: Bootstrap and AngularJS; Back end technologies: Node.js, Express.js and SQL"
			],
			location: "Queens, New York",
			time: "June 2016 - June 2017"
		}
	];


/*	$scope.personalProjects = [
		{
			name:"Tic-Tac-Toe",
			details: [
				"Play tic-tac-toe with another person or a computer",
				"Uses the minimax algorithm to calculate AI moves",
				"Made with JavaScript, jQuery, and Bootstrap"
			]
		},
		{
			name: "Pomodoro Clock",
			details: [
				"User can set work time and break time",
				"Cycles through work and break represented with different colors",
				"Made with JavaScript, jQuery, and Bootstrap"
			]
		}
	]
*/


	$scope.technologies = [
		{name: "HTML", img: "images/html.png"},
		{name: "CSS", img: "images/css.png"},
		{name: "JavaScript", img: "images/javascript.png"},
		{name: "jQuery", img: "images/jquery.png"},
		{name: "AngularJS", img: "images/angular.png"},
		{name: "Node.js", img: "images/node.png"},
		{name: "Java", img: "images/java.png"},
		{name: "Python", img: "images/python.png"},
		{name: "SQL", img: "images/sql.png"},
		
	]

	$scope.otherExperiences = [
		{
			name:"Research Assistant",
			organization: "Cornell University, Entomology Department",
			time: "May 2015 – May 2016",
			location: "Ithaca, New York",
			info: [
				"Performed study on population dynamics of the House Fly, Musca domesica",
				"Analyzed results and wrote thesis leading to publication",
				"Meisel et al. 2016. “Is Multifactorial Sex Determination in the House Fly, Musca domestica (L.), Stable over Time?” J. Heredity 107 (7): 615-625"
			]
		}/*,
		{
			name:"Research Assistant",
			location: "Queens College",
			timeFrame: "Jun. – Aug. 2012 & 2013",
			details: [
				"Studied effects of stress on children of pregnant women for a longitudinal birth cohort study",
				"Recruited patients, powderized tissue, and extracted DNA"
			]
		}*/
	];


/*
	$scope.activities = [
		{
			organization: "Red Cross club",
			location: "Cornell University, Ithaca, NY",
			details: [
				"Secretary Sept. 2013-May 2016",
				"Blood drives, Disaster Action Team, community work"
			],
			timeFrame: "Sept. 2013-May 2016"
		},
		{
			organization: "Taekwondo club",
			location: "Cornell University, Ithaca, NY",
			timeFrame: "Sept. 2013-May 2016"
		}
	];
*/
});