angular.module('personalSite')
.controller('2048Ctrl',function($scope){
	
	$scope.highest = 2;

	var recentHigh = 2;

	$scope.start = {'msg':'start', 'color':'#34ff34'};

	$scope.gameOver = true;

	var sizeInfo = {
		2: {color:"#eee4d9", size:'2.7em'},
		4: {color:"#f6e8cb", size:'2.7em'},
		8: {color:"#feb17b", size:'2.7em'},
		16: {color:"#f49563", size:'2.7em'},
		32: {color:"#f67b5e", size:'2.7em'},
		64: {color:"#f75e3e", size:'2.7em'},
		128: {color:"#edcf6f", size:'2.1em'},
		256: {color:"#edcc61", size:'2.1em'},
		512: {color:"#ecc850", size:'2.1em'},
		1024: {color:"#edc63d", size:'1.5em'},
		2048: {color:"#edc22e", size:'1.5em'}
	}
	$scope.cells = [];

	var emptyPos = {};

	$scope.gameStatus = {'msg':'You Won!', 'started': false}

	for (var i = 0; i<16;i++) {
		$scope.cells[i] = {val:null, color:"#B1AAA4", size:null};
		emptyPos[i] = true;
	}

	$scope.start = function() {
		$scope.gameStatus.started = true;
		addTile();
		addTile();
	}

	$scope.restart = function() {
		$scope.gameStatus.lost = false;
		$scope.gameStatus.won = false;
		recentHigh = 2;
		for (var i = 0; i<16;i++) {
			$scope.cells[i] = {val:null, color:"#B1AAA4", size:null};
			emptyPos[i] = true;
		}
		addTile();
		addTile();
	}
	
	 var adjacent = {
		0: [],
		1: [0],
		2: [1],
		3: [2],
		4: [0],
		5: [1,4],
		6: [2,5],
		7: [3,6],
		8: [4],
		9: [5,8],
		10: [6,9],
		11: [7,10],
		12: [8],
		13: [9,12],
		14: [10,13],
		15: [11,14]
	} 
	
	function findEmpty() {
		var empty = [];
		for (var i=0; i<16; i++) {
			if (emptyPos[i]) {
				empty.push(i)
			}
		}
		return empty[Math.floor(Math.random() * empty.length )];
	}
	
	function addTile() {
		var pos = findEmpty();
		$scope.cells[pos].val = 2;
		$scope.cells[pos].color = sizeInfo[2].color;
		$scope.cells[pos].size = sizeInfo[2].size;
		emptyPos[pos] = false;
	}
	
	function checkDone() {

		for (var i=0; i<16; i++) {
			if (emptyPos[i]) {
				return false;
			} else {
				var adjacentVals = adjacent[i];

				var posVal = $scope.cells[i].val;

				for (var j=0; j<adjacentVals.length; j++) {
					var adj = adjacentVals[j];
					var adjVal = $scope.cells[adj].val

					if (posVal == adjVal) {
						return false;
					}
				} 
			}
		}
		return true;
	} 
	
	function left() {
		var merged = {};
		var moved = false;
		for (var i=1; i<4; i++) {
			var positions = [i,i+4,i+8,i+12];
			for (var j=0; j<4; j++) {
				var pos = positions[j];
				if ($scope.cells[pos].val != null) {
					var end = j*4;
					var adj = pos - 1;
					while (pos > end) {
						if ($scope.cells[adj].val == null) {
							move(pos,adj);
							pos = adj;
							adj-= 1;
							moved = true;
						} else if ($scope.cells[adj].val == $scope.cells[pos].val && !merged[adj]) {

							merge(pos,adj);
							merged[adj] = true;
							pos = adj;
							adj-= 1;
							moved = true
							break;
						} else {
							break;
						}

					} 
				}
			}
		}
		return moved;
	}
	
	function right() {
		var merged = {};
		var moved = false;
		for (var i=2; i>=0; i--) {
			var positions = [i,i+4,i+8,i+12];
			for (var j=0; j<4; j++) {
				var pos = positions[j];
				if ($scope.cells[pos].val != null) {
					var end = j*4 +3;
					var adj = pos + 1;
					while (pos < end) {
						if ($scope.cells[adj].val == null) {
							move(pos,adj);
							pos = adj;
							adj += 1;
							moved = true;
						} else if ($scope.cells[adj].val == $scope.cells[pos].val && !merged[adj]) {

							merge(pos,adj);
							merged[adj] = true;
							pos = adj;
							adj+= 1;
							moved = true;

							break;
						} else {
							break;
						}

					} 
				}
			}
		}
		return moved;
	}
	

	
	function up() {
		var merged = {};

		var moved = false;
		for (var i=4; i<13; i+=4) {
			var positions = [i,i+1,i+2,i+3];
			for (var j=0; j<4; j++) {
				var pos = positions[j];
				if ($scope.cells[pos].val != null) {
					var end = j;
					var adj = pos - 4;
					while (pos > end) {
						if ($scope.cells[adj].val == null) {
							move(pos,adj);
							pos = adj;
							adj -= 4;
							moved = true;
						} else if ($scope.cells[adj].val == $scope.cells[pos].val && !merged[adj]) {

							merge(pos,adj);
							merged[adj] = true;
							pos = adj;
							adj-= 4;
							moved = true;

							break;
						} else {
							break;
						}
					} 
				}
			}
		}
		return moved;
	}
	
 
	
	function down() {
		var merged = {};

		var moved = false;
		for (var i=8; i>=0; i-=4) {
			var positions = [i,i+1,i+2,i+3];
			for (var j=0; j<4; j++) {
				var pos = positions[j];
				if ($scope.cells[pos].val != null) {
					var end = j+12;
					var adj = pos + 4;
					while (pos < end) {            
						if ($scope.cells[adj].val == null) {
							move(pos,adj);
							pos = adj;
							adj += 4;
							moved = true;
						} else if ($scope.cells[adj].val == $scope.cells[pos].val && !merged[adj]) {
							merge(pos,adj);
							merged[adj] = true;
							pos = adj;
							adj+= 4;
							moved = true;
							break;
						} else {
							break;
						}
					} 
				}  
			}
		}
		return moved;
	}
	
	function move(pos, adj) {
		$scope.cells[adj].val = $scope.cells[pos].val;
		$scope.cells[adj].color = $scope.cells[pos].color;
		$scope.cells[adj].size = $scope.cells[pos].size;
		$scope.cells[pos].val = null;
		$scope.cells[pos].color = "#B1AAA4";
		$scope.cells[pos].size = null;
		emptyPos[adj] = false;
		emptyPos[pos] = true;
	}
	
	function merge(pos, adj) {
		var val = $scope.cells[pos].val * 2;
		$scope.cells[adj].val = val;
		$scope.cells[adj].color = sizeInfo[val].color;
		$scope.cells[adj].size =  sizeInfo[val].size;
		$scope.cells[pos].val = null;
		$scope.cells[pos].color = "#B1AAA4";
		$scope.cells[pos].size = null;
		emptyPos[adj] = false;
		emptyPos[pos] = true;

		console.log(recentHigh)
		if (val > recentHigh) {

			recentHigh = val;
			
			if (recentHigh > $scope.highest) {
				$scope.highest = val
			}
			
			console.log(val)
			if (recentHigh == 2048) {
				$scope.gameStatus.won = true;
				$scope.gameStatus.msg = "You Won!"
			}
		}
	}
	
	$scope.keyPress = function(e) {
		e.preventDefault();
		var pressed = e.which;
		if ($scope.gameStatus.started && !($scope.gameStatus.won && $scope.gameStatus.lost)) {		
			if (pressed == 37) {
				var moved = left();
			} else if (pressed == 38) {
				var moved = up();
			} else if (pressed == 39) {
				var moved = right();
			} else if (pressed == 40) {
				var moved = down();
			}
			if (moved) {
				addTile();
			if (checkDone()) {
					$scope.gameStatus.lost = true;
					$scope.gameStatus.msg = "You Lost :/"
				}
			}
		}
	}


})