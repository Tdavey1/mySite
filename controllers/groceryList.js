angular.module('personalSite')

.controller("GroceryListCtrl", function($scope) {

	$scope.groceryList = []
	
	$scope.temp = {"name":null, "amount":null};

	$scope.addItem =function(name, amount) {
		console.log(name, amount)
		var item = {}
		var amount = (amount) ? amount : 1;
		item.name = name;
		item.amount = amount;
		item.complete = false;
		$scope.groceryList.unshift(item)
		$scope.temp.name = null;
		$scope.temp.amount = null;
	}

	$scope.check = function(elem) {
		var index = elem.$index;
		$scope.groceryList[index].complete = !$scope.groceryList[index].complete;
		var tmp = $scope.groceryList[index];
		if ($scope.groceryList[index].complete) {
			$scope.groceryList.splice(index,1);
			$scope.groceryList.push(tmp);
		} else {
			$scope.groceryList.splice(index,1);
			$scope.groceryList.unshift(tmp);
		}

	}

	$scope.removeItem = function(elem) {
		var index = elem.$index;
		$scope.groceryList.splice(index,1);
	}

})