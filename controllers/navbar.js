angular.module('personalSite')
.controller('NavbarCtrl', function($scope, $sessionStorage) {
	$scope.isCollapsed = true;

/*
	$scope.changeStyle = function(style) {
		$sessionStorage.style = style;
		$scope.isCollapsed=!$scope.isCollapsed;
	}

	$scope.styles = {
		Default: 'bootstrap',
		Paper: 'paper',
		Sandstone: 'sandstone',
		Slate: 'slate'
	};
*/

});