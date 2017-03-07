module.exports = function(ngModule){
    ngModule.controller('detailCtrl',['$scope','weatherService','$routeParams','moment', function($scope,weatherService,$routeParams,moment){
    	 weatherService.getAllData().then(function(response){
    	 		$scope.cityList = response.data;
    	 		$scope.selectedItem = $routeParams.param;
    	 	
            });
    	 $scope.exampleDate = moment().hour(8).minute(0).second(0).toDate();
    	 $scope.message = {
		   text: 'hello world!',
		   time: new Date()
		};

	}])
}

