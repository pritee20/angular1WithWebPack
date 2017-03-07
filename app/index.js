const angular = require('angular');

var moment = require('moment');
var angularMoment = require('angular-moment');
var ngRoute =  require('angular-route');
const ngModule = angular.module('app', ['ngRoute', 'angularMoment']);

require('./directives')(ngModule);
require('./main')(ngModule);
require('./transclusion')(ngModule);

ngModule.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true); // changeing hasbang
	$routeProvider
	.when('/',{
		templateUrl: 'main/main-template.html',
		controller: 'mainCtrl'
	})
	.when('/detail/:param',{
		templateUrl: 'main/detail-weather.html',
		controller: 'detailCtrl'
	})
});