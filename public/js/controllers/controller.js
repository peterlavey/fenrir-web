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
	    });
	};
}])
.controller('RutaCtrl', ['$scope','$http', 'RutaService', '$location', function($scope, $http, RutaService, $location) {
	$scope.getRutas=function(){
		RutaService.getRutas(sessionStorage.getItem('usuario')).success(function(data){
			$scope.rutas=data;
		}).error(function(){
			alert("Error rutas");
		});
	};
	$scope.logout=function(){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('usuario');
		window.location.pathname='';
	};

	$scope.getRutas();
}]);