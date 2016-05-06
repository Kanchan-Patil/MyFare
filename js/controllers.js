angular.module('app.controllers', [])
  
.controller('myMeterCtrl', function($scope) {

})
   
.controller('historyCtrl', function($scope, $http) {
	 $scope.history = {};
	$http({
        method : "GET",
        url : "/db/db.json"
    }).then(function mySucces(response) {
        $scope.history = response.data;
         console.log($scope.history);
    }, function myError(response) {
        // $scope.journey = response.statusText;
        console.log("error");
    });

})
   
.controller('aboutUsCtrl', function($scope) {

})
      
.controller('journeyDetailsCtrl', function($scope, $http) {
	$scope.journey = {
		// distance : 11.0,
		// waitTime : 05,
		// fare : 123.50

	};

 	$http({
        method : "GET",
        url : "/db/db.json"
    }).then(function mySucces(response) {
        $scope.journey = response.data[0];
         console.log($scope.journey);
    }, function myError(response) {
        // $scope.journey = response.statusText;
        console.log("error");
    });



})
   
.controller('summaryCtrl', function($scope) {

})
 