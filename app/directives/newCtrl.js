module.exports =  function(ngModule){
	ngModule.controller('newCtrl',['$scope', function($scope){
		$scope.customer = {
    			name: 'Naomi',
   			    address: '1600 Amphitheatre'
  			};
  			
		$scope.newcustomer = {
			name: 'Nate',
			address: '1800 NewYork'
		};




	}]);
}