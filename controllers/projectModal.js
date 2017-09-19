angular.module('personalSite')
.controller('ModalCtrl', function($scope, $uibModalInstance, project) {
	
	$scope.project = project;

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};

	$scope.close = function() {
		$uibModalInstance.close();

	}

})