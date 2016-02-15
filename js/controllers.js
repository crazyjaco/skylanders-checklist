var skylandersControllers = angular.module('skylandersControllers', []);

skylandersControllers.controller('SkylanderListCtrl', [ '$scope', '$routeParams', '$http', 
	function ($scope, $routeParams, $http) {
		if(!$scope.skylandersRaw){
			$http.get('data/characters-v2-json.json').success(function(data) {
				$scope.skylandersRaw = data;
				console.log( 'Data: ', data );
			});
		}

		$scope.games = [
			{
				id: 0,
				name: "Skylanders: Spyro's Adventure",
				logo: "images/ssa-logo-large.png"
			},		
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
				logo: "images/swap-force-logo-large.png"
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

	}
]);

skylandersControllers.controller('SkylanderDetailCtrl', [ '$scope', '$routeParams', '$http', 
	function ($scope, $routeParams, $http){
		if(!$scope.skylandersRaw){
			$http.get('data/characters-v2-json.json').success(function(data) {
				$scope.skylandersRaw = data;
				console.log('reassigned raw data');
			});
		}

		// Loop through each character in the character array.
		for (var idx in $scope.skylandersRaw ) {
			// console.log('index: ' + idx, 'id: ' + data.characters[idx].id, 'data: ' + data.characters[idx]);
			// Create new object with name slugs as indexes.
			$scope.skylanders[data.characters[idx].id] = data.characters[idx];
			// Establish family trees (variants of characters).	
			if (data.characters[idx].hasOwnProperty('family')) {
				console.log('families type', typeof $scope.skylandersFamilies );
				if( ! $scope.skylandersFamilies[data.characters[idx].family] ) {
					$scope.skylandersFamilies[data.characters[idx].family] = Array();
				}
				$scope.skylandersFamilies[data.characters[idx].family].push( data.characters[idx].id );
			}
		};
		console.log('Parsed', $scope.skylanders );
		console.log('Families', $scope.skylandersFamilies );
		// $scope.skylandersFamilies = Array();
		// $scope.skylandersFamilies = skylandersFamilies;
		// $scope.skylanders = skylandersParsed;

		$scope.setSelectedSkylander = function(){
			$scope.selectedSkylanderId = $routeParams.skylanderId;
		//$scope.selectedSkylander = $scope.skylanders[$routeParams.skylanderId];
		}
	}
]);