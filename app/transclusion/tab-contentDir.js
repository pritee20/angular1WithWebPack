module.exports = function(ngModule){
	ngModule.directive('tabContent', function(){
		return{
			restrict: 'E',
			template: require('./tab-content.html')
		}
	});
}