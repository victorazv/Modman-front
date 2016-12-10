modman.config(function($stateProvider, ENVIROMENT) {
  
  var homeState = {
    name: 'home',
    url: '/',
    template: "<h3 style='text-align:center;''>Bem vindo ao gerenciador de módulos!</h3>"
  }

  var loginState = {
    name: 'login',
    url: '/login',
    template: '<modman-login></modman-login>'
  }

 var clientState = {
    name: 'clients',
    url: '/clients',
    template: "<modman-clients clients='$resolve.clients'></modman-clients>",
    resolve: {
      clients: function($http){ 
        return $http.get(ENVIROMENT + "api/client").then(function (response) {
            return response.data;
        });
      }
    }
  }

 var clientRegisterState = {
    name: 'client_register',
    url: '/client_register',
    template: "<modman-client-register></modman-client-register>",
 }

 var clientEditState = {
    name: 'client_edit',
    url: '/client_edit',
    template: "<modman-client-edit></modman-client-edit>",
    params:{
      client: null
    }
  } 

var systemState = {
    name: 'systems',
    url: '/systems',
    template: "<modman-systems systems='$resolve.systems'></modman-systems>",
    resolve: {
      systems: function($http){ 
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var systemRegisterState = {
    name: 'system_register',
    url: '/system_register',
    template: "<modman-system-register></modman-system-register>",
  }

  var systemEditState = {
    name: 'system_edit',
    url: '/system_edit',
    template: "<modman-system-edit></modman-system-edit>",
    params:{
      system: null
    }
  } 

  var moduleState = {
    name: 'modules',
    url: '/modules',
    template: "<modman-modules modules='$resolve.modules'></modman-modules>",
    resolve: {
      modules: function($http){ 
        return $http.get(ENVIROMENT + "api/module/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var moduleRegisterState = {
    name: 'module_register',
    url: '/module_register',
    template: "<modman-module-register systems='$resolve.systems'></modman-module-register>",
    resolve: {
      systems: function($http){ 
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var moduleEditState = {
    name: 'module_edit',
    url: '/module_edit',
    template: "<modman-module-edit systems='$resolve.systems'></modman-module-edit>",
    params:{
      module: null
    },
    resolve: {
      systems: function($http){ 
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var clientSystemsState = {
    name: 'client_systems',
    url: '/client_systems',
    template: "<modman-client-systems client_systems='$resolve.client_systems'></modman-client-systems>",
    resolve: {
      client_systems: function($http){ 
        return $http.get(ENVIROMENT + "api/client_system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  $stateProvider.state(homeState);
  $stateProvider.state(loginState);

  $stateProvider.state(clientState);
  $stateProvider.state(clientRegisterState);
  $stateProvider.state(clientEditState);
  
  $stateProvider.state(systemState);
  $stateProvider.state(systemRegisterState);
  $stateProvider.state(systemEditState);

  $stateProvider.state(moduleState);
  $stateProvider.state(moduleRegisterState);
  $stateProvider.state(moduleEditState);
  
  $stateProvider.state(clientSystemsState);

});