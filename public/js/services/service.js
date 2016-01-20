angular.module('FenrirService', [])
.factory('RutaService', ['$http',function($http) {
	return {
    getDespachos:function(id){
      return $http.get('http://localhost:3001/api/despacho/'+id);
    },
    createDespacho:function(id, despacho){
      return $http.post('http://localhost:3001/api/despacho/'+id, despacho);
    },
    updateRuta:function(id, ruta){
      return $http.put('http://localhost:3001/api/ruta/'+id, ruta);
    },
		getRutas:function(id){
      return $http.get('http://localhost:3001/api/ruta/'+id);
    },
    createRuta:function(id, ruta){
      return $http.post('http://localhost:3001/api/ruta/'+id, ruta);
    }
	}
}])
.factory('LoginService', ['$http',function($http) {
	return {
		login:function(user){
	        return $http.post('http://localhost:3001/api/usuario/'+user.username+'/'+user.password);
	    }
	}
}])
.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
})
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
})