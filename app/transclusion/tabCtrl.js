module.exports = function(ngModule){
	ngModule.controller('tabCtrl',['$scope', function($scope){
		$scope.tab = [{
			id: 1,
			name: 'First Tab'
		},{
			id: 2,
			name: 'Second Tab'
		},
		{
			id: 3,
			name: 'Third Tab'
		}];
		$scope.showmeTabContent = function(tab){
			var value;
			for(var i = 0; i< tab.length; i++){
				(function(){
					var y = i;
					var value = tab[i].name;

				})();
				
			}
			console.log(value);
			return 'Tab Name' + " " + value;
		}


	}])
}