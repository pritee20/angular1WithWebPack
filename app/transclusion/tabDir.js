module.exports = function(ngModule){
	ngModule.directive('tab', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				tabName: '=', // expecting object
				tabClick: '&'
			},
			template: require('./tabTemp.html')
		}
	});
}