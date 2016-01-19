angular.module('FenrirCtrl', [])
.controller('LoginCtrl', ['$scope','$http', 'LoginService', function($scope, $http, LoginService) {
	$scope.user =  {username: 'admin', password: '123'};
  	//$scope.message = '';
  	$scope.submit = function () {
  		LoginService.login($scope.user).success(function (data, status, headers, config) {
  			alert(":D");
			//$window.sessionStorage.token = data.token;
			//$window.sessionStorage.usuario = data.usuario._id;
			//$window.sessionStorage.mensaje = "Hola ".concat(data.usuario.nombre? data.usuario.nombre : data.usuario.username);
	        //$scope.message = 'Welcome';
	        //$state.go('app.list');
	    }).error(function (data, status, headers, config) {
	    	alert(":'(");
	        //delete $window.sessionStorage.token;
	        //$scope.message = 'Error: Invalid user or password';
	    });
	};
}]);