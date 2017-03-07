module.exports = function(ngModule){
    ngModule.controller('mainCtrl',['$scope', 'weatherService','$location','$routeParams', function($scope, weatherService,$location, $routeParams){
    weatherService.getAllData().then(function(response){
                $scope.cityList = response.data;
                //console.log($scope.cityList);

            });

		    $scope.exarr = [
		        { 'name': 'John', 'age': 26 },
		        { 'name': 'Bob', 'age': 41 },
		        { 'name': 'Tom', 'age': 32 },
		        { 'name': 'Ralph', 'age': 17 },
		        { 'name': 'Molly', 'age': 13 }
		      ];

/*            $scope.getSelectedData = function(){
                 weatherService.city = $scope.city;
                $location.path('/detail/' + $scope.city.city);
                

            };*/

    }])
}
