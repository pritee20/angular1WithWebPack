
module.exports = function(ngModule){
	ngModule.directive('selectMenu', function(){
		require('file-loader!./list.less');
		return {
			restrict: 'AE',
			template: require('./main-template.html')
		}
	})
}