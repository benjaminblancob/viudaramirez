angular.module('vrApp.controllers', [])

.controller('AppCtrl', function($scope, $rootScope) {
	$rootScope.$on('audioplayer:load', function (event, autoplayNext) {
    // Tell someone a song is gonna get loaded.
  });
})
.controller('AcercaCtrl', function($scope) {

})
.controller('NovedadesCtrl', function($scope) {
	
})
.controller('PrensaCtrl', function($scope) {
	
})

.controller('ColeccionesCtrl', function($scope, $http) {
	$scope.prensa = [
		{
	    	'coleccionId': '51',
	     	'nombre': 'Revista WILD',
	     	'temporada':'2013',
	     	'imagen': 'coleccion/wild-2013-c.jpg'
	 	},{
	    	'coleccionId': '52',
	     	'nombre': 'Revista Alacarta',
	     	'temporada':'Verano 2011',
	     	'imagen': 'coleccion/alacarta-verano-2011-c.jpg'
	 	},{
	    	'coleccionId': '53',
	     	'nombre': 'Revista WILD',
	     	'temporada':'2009',
	     	'imagen': 'coleccion/wild-2009-c.jpg'
	 	},{
	    	'coleccionId': '54',
	     	'nombre': 'Revista WILD',
	     	'temporada':'2009',
	     	'imagen': 'coleccion/wild-invierno-2009-c.jpg'
	 	}
	];
	$scope.novedades = [
		{
			'titulo' : 'Viuda Ramirez y Hard Rock Hotels en AFW',
			'imagenUrl' : 'novedades/viuda-ramirez-2014.jpg'
			
		},{
			'titulo' : 'Viuda Ramirez y Hard Rock Hotels en AFW',
			'imagenUrl' : 'novedades/viuda-ramirez-2014.jpg'
			
		}
	];
	$scope.colecciones = [
	    {
	    	'coleccionId': '1',
	     	'nombre': 'AFW',
	     	'temporada':'Invierno 009',
	     	'imagen': 'coleccion/afw-invierno-2009-c.jpg'
	 	},{
	    	'coleccionId': '2',
	     	'nombre': 'AFW',
	     	'temporada':'Invierno 011',
	     	'imagen': 'coleccion/afw-invierno-2011-c.jpg'
	 	},{
	    	'coleccionId': '3',
	     	'nombre': 'AFW',
	     	'temporada':'Primavera-Verano 010',
	     	'imagen': 'coleccion/afw-primavera-verano-2010-c.jpg'
	 	},{
	    	'coleccionId': '4',
	     	'nombre': 'Viuda Ramirez',
	     	'temporada':'Invierno 013',
	     	'imagen': 'coleccion/viudaramirez-invierno-2013-c.jpg'
	 	},{
	    	'coleccionId': '5',
	     	'nombre': 'Viuda Ramirez',
	     	'temporada':'Verano 012',
	     	'imagen': 'coleccion/viudaramirez-verano-2012-c.jpg'
	 	},{
	    	'coleccionId': '6',
	     	'nombre': 'Viuda Ramirez',
	     	'temporada':'Verano 011',
	     	'imagen': 'coleccion/viudaramirez-verano-2011-c.jpg'
	 	}
	  ];

	
})

.controller('ColeccionCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, $http) {

	$http.get('json/' + $stateParams.coleccionId + '.json').success(function(data) {
	    $scope.coleccion = data;
	});

	$scope.next = function() {
    	$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
	    $ionicSlideBoxDelegate.previous();
	};
})
