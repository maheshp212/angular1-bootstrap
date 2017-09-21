'use strict';

appModule.controller('redController', function($scope, $location, $window) {
	$scope.a = AppUtil.gethexa(16);
	
	// alerts  start 
	$scope.alerts = [
	{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	];

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
	/* alerts  end */

	/*############################################################################################*/ 
	/*############################################################################################*/ 
	/*############################################################################################*/ 

	/*date formatting start */
	$scope.format = 'dd-MMMM-yyyy'; 
	$scope.open1 = function() {
		$scope.popup1.opened = true;
	};

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};

	$scope.popup1 = {
		opened: false
	};

	$scope.popup2 = {
		opened: false
	};
	/*date formatting ends */
	/*############################################################################################*/ 
	/*############################################################################################*/ 
	/*############################################################################################*/ 

	/*Rating start*/
	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};
	/*Rating ends*/
	/*############################################################################################*/ 
	/*############################################################################################*/ 
	/*############################################################################################*/ 

	/* Tabs start*/
	$scope.tabs = [
	{ title:'Dynamic Title 1', content:'Dynamic content 1' },
	{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
	];

	$scope.alertMe = function() {
		setTimeout(function() {
			$window.alert('You\'ve selected the alert tab!');
		});
	};
	/* Tabs start End*/


	/*auto typings Start*/
	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	/*auto typings Start*/
	
});
