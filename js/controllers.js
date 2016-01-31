var skylandersApp = angular.module('skylandersApp', []);

	skylandersApp.controller('SkylanderListCtrl', [ '$scope', '$http', function ($scope, $http) {
		$http.get('data/characters-v2-json.json').success(function(data) {
			$scope.skylanders = data;
		});

		$scope.games = [
			{
				id: 0,
				name: "Skylanders: Spyro's Adventure",
				logo: "images/ssa-logo-large.png"
			},
			{
				id: 1,
				name: "Skylanders: Giants",
				logo: "images/giants.png"
			},
			{
				id: 2,
				name: "Skylanders: Swap Force",
				logo: "images/swap-force-logo-large.png.png"
			},
			{
				id: 3,
				name: "Skylanders: Trap Team",
				logo: "images/tt-logo.png"
			},
			{
				id: 4,
				name: "Skylanders: Superchargers",
				logo: "images/superchargers-logo-large.png"
			},				
		];

		//$scope.orderProp = 'age';
}]);