var skylandersControllers = angular.module('skylandersControllers', []);

skylandersControllers.controller('SkylanderAppCtrl', [ '$scope', '$routeParams', '$http', 
	function ($scope, $routeParams, $http) {
		var skychars;

		if(!$scope.skylandersRaw){
			// Populate the raw file character data
			$http.get('data/characters-v2-json.json').success(function(data) {
				$scope.skylandersRaw = data;
				console.log( 'Data: ', data );

				// Populate 'Associative Array' of character objects and Family Array
				// Needs to be within 'success' promise for $http.get() call.
				$scope.skylanders = {};
				$scope.skylandersFamilies = Array();
				skychars = $scope.skylandersRaw.characters;
				// Loop through each character in the character array.
				for (var idx in skychars ) {
					// Create new object with name slugs as indexes.
					$scope.skylanders[skychars[idx].id] = skychars[idx];
					// Establish family trees (variants of characters).	
					if (skychars[idx].hasOwnProperty('family')) {
						// If family doesn't exist yet, instantiate it.
						if( ! $scope.skylandersFamilies[skychars[idx].family] ) {
							$scope.skylandersFamilies[skychars[idx].family] = Array();
						}
						// Add member to family.
						$scope.skylandersFamilies[data.characters[idx].family].push( skychars[idx].id );
					}
				};				
			});
		}

		$scope.stat_names = [
			'power',
			'armor',
			'agility',
			'luck',
			'total'
		];

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

skylandersControllers.controller('SkylanderListCtrl', [ '$scope', '$routeParams', '$http', 
	function ($scope, $routeParams, $http) {
		console.log('got here');
	}
]);

skylandersControllers.controller('SkylanderDetailCtrl', [ '$scope', '$routeParams', '$http', 
	function ($scope, $routeParams, $http){

		$scope.setSelectedSkylander = function( $routeParams ){
			$scope.selectedSkylanderId = $routeParams.skylanderId;
			$scope.selectedSkylander = $scope.skylanders[$routeParams.skylanderId];
			console.log('Selected Skylander:', $scope.skylanders);
		}

		$scope.setSelectedSkylander( $routeParams );
	}
]);