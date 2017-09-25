angular.module('personalSite')

.controller("GroceryListCtrl", function($scope) {

	$scope.groceryList = [];
	$scope.completed = [];

	$scope.duplicate = false;
	
	$scope.temp = {"name":null, "amount":null};

	var items = {};

	$scope.addItem =function(name, amount) {
		var itemName = name.toLowerCase();
		if (!(itemName in items)) {
			var item = {}
			var amount = (amount) ? amount : 1;
			item.name = name;
			item.amount = amount;
			item.complete = false;
			$scope.groceryList.push(item);
			$scope.temp.name = null;
			$scope.temp.amount = null;
			items[itemName] = true;
		} else {
			$scope.duplicate = true;
		}
	}

	$scope.removeWarning = function() {
		$scope.duplicate = false;
	}

	$scope.check = function(elem, location) {
		var index = elem.$index;
		if (location == 'grocery') {
			var tmp = $scope.groceryList.splice(index,1)[0];
			console.log(tmp)
			$scope.completed.push(tmp);

		} else {
			var tmp = $scope.completed.splice(index,1)[0];
			$scope.groceryList.push(tmp);
		}
	}

	$scope.removeItem = function(elem) {
		var index = elem.$index;
		$scope.groceryList.splice(index,1);
	}

})