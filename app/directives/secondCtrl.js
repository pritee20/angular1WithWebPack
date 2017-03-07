module.exports =  function(ngModule){
	ngModule.controller('secondCtrl',['$scope', function($scope){
		$scope.personalData = {
    			name: 'Nate',
   			    address: '1800 NewYork'
  			};
	}]);
}