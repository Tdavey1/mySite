angular.module("personalSite")

.controller("StickyNotesCtrl", function($scope) {
	
	var interval, top, left, offTop, offLeft;
	
	var colors = ["#ccccff", "#ccffcc", "#ffffcc", "#ccffff", "#ffe6cc", "#ffccff"];

	var front = 0;

	$scope.notes = [];

	$scope.addNote = function() {
		var leftPos = Math.floor(Math.random() * (600-210));
		var topPos = Math.floor(Math.random() * (500-210));
		var rotate = Math.random() * 10 - 5;
		var color = colors[Math.floor(Math.random() * colors.length) ]
		var note = {};
		note.left = leftPos;
		note.top = topPos;
		note.rotate = rotate;
		note.oldRotate = rotate;
		note.z = 0;
		note.color = color;
		$scope.notes.push(note);
	}

	$scope.deleteNote = function(elem) {
		var index = elem.$index;
		$scope.notes.splice(index,1);
	}
	
	$scope.clearAll = function() {
		$scope.notes = [];
	}

	$scope.mousemove = function(e) {
		var targetId = e.target.id;
		var targetClass= e.target.className.split(" ")[0];
		top = e.offsetY;
		left = e.offsetX;
		if (targetId != "stage-notes") {
			top += e.target.offsetTop;
			left += e.target.offsetLeft;
			if (targetClass =="sticky-content" || targetClass=="sticky-title") {
				top += e.target.offsetParent.offsetTop;
				left += e.target.offsetParent.offsetLeft;
			}
		}
	}

	$scope.mouseenter = function(elem) {
		var index = elem.$index;
		$scope.notes[index].rotate = 0;
	}

	$scope.mouseleave = function(elem) {
		var index = elem.$index;
		$scope.notes[index].rotate = $scope.notes[index].oldRotate;
	}

	$scope.mousedown = function(item, elem) {
		var index = elem.$index;
		$scope.notes[front].z = 0;
		$scope.notes[index].z = 1;
		front = index;
		offLeft = item.offsetX+3;
		offTop = item.offsetY;
		var target = item.target.className.split(" ")[0];
		if (target == "sticky-content" || target == "sticky-title") {
			offLeft += item.target.offsetLeft;
			offTop += item.target.offsetTop;
		}
		interval = setInterval(function() {
			$scope.notes[index].left = left-offLeft;
			$scope.notes[index].top = top-offTop;
		},20)
	}
	
	$scope.release = function(item) {
		clearInterval(interval);
	}
		
})