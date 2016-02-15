

var skylandersApp = angular.module('skylandersApp', [
	'ngRoute',
	'skylandersControllers'
]);

skylandersApp.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider.
		when('/characters', {
			templateUrl: 'partials/character-list.html',
			controller: 'SkylanderListCtrl'
		}).
		when('/characters/:skylanderId', {
			templateUrl: 'partials/character-detail.html',
			controller: 'SkylanderListCtrl'
		}).
		otherwise({
			redirectTo: '/characters'
		});
}]);