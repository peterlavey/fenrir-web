angular.module('FenrirCtrl', [])
.controller('LoginCtrl', ['$scope','$http', 'LoginService', '$location', function($scope, $http, LoginService, $location) {
	$scope.user =  {username: 'admin', password: '123'};
  	//$scope.message = '';
  	$scope.submit = function () {
  		LoginService.login($scope.user).success(function (data, status, headers, config) {
			sessionStorage.setItem('token', data.token);
			sessionStorage.setItem('usuario', data.usuario._id);
	        window.location.pathname='dashboard';
	    }).error(function (data, status, headers, config) {
	        sessionStorage.removeItem('token');
	        alert("Usuario no valido");
	    });
	};
}])
.controller('RutaCtrl', ['$scope','$http', 'RutaService', '$location', function($scope, $http, RutaService, $location) {
	$scope.ruta= {nombre: "",
                 descripcion: "",
                 direccion:{
                    ciudad: "",
                    region: "",
                    detalle: ""
                 },
                 carga:{
                    tipo: "",
                    peso: null
                 },
                 oferta: null}
    $scope.flgRuta='inline';
    $scope.flgDespacho='none';
    $scope.updateRuta=function(ruta){
    	RutaService.updateRuta($scope.ruta._id, $scope.ruta).success(function(data){
    		console.info("update success");
    	}).error(function(){
    		alert("Error update")
    	});
    };             
    $scope.seleccionaRuta=function(ruta){ 	 
    	$scope.flgRuta='none';
    	$scope.flgDespacho='inline';   
    	$scope.ruta=ruta;
    };
    $scope.volver=function(ruta){
    	 $scope.flgRuta='inline';
    	$scope.flgDespacho='none';     
    };
	$scope.createRuta=function(){
		RutaService.createRuta(sessionStorage.getItem('usuario'), $scope.ruta).success(function(data){
			console.info("Ruta Creada!");
		}).error(function(){
			alert("Error crea ruta")
		})
	};
	$scope.getRutas=function(){
		RutaService.getRutas(sessionStorage.getItem('usuario')).success(function(data){
			$scope.rutas=data;
		}).error(function(){
			alert("Error lista rutas");
		});
	};
	$scope.logout=function(){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('usuario');
		window.location.pathname='';
	};

	$scope.getRutas();
}]);