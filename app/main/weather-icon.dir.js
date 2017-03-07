module.exports = function(ngModule){
	ngModule.directive('weatherIcon', function(){
		return {
			restrict: 'E',
			template: require('./weather-icon.html'),
			scope: {
				weather: '=',
				weatherIcon: '='
			},
			link: function(scope,element,attrs){
					 var skycons = new Skycons();
					 var skyIcon = document.getElementById("skyIcon");
					 skyIcon.height = 64;
					skyIcon.width = 64;
					skycons.add("skyIcon", Skycons.weatherIcon);
					scope.$watch( "weatherIcon", function () {
					skycons.set( skyIcon, scope.weatherIcon );
					}, true );
					skycons.play();
			}
		}
	})
}