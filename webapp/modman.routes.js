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

//=================Cliente=================

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
    url: '/client_edit/:id_client',
    template: "<modman-client-edit client='$resolve.client'></modman-client-edit>",
    resolve:{
      client: function($http, $stateParams){
        return $http.get(ENVIROMENT + 'api/client/' + $stateParams.id_client).then(function(response){
          return response.data;
        });
      }
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

//=================Sistema=================

  var systemRegisterState = {
    name: 'system_register',
    url: '/system_register',
    template: "<modman-system-register></modman-system-register>",
  }

  var systemEditState = {
    name: 'system_edit',
    url: '/system_edit/:id_system',
    template: "<modman-system-edit system='$resolve.system'></modman-system-edit>",
    resolve:{
      system: function($http, $stateParams){
        return $http.get(ENVIROMENT + 'api/system/' + $stateParams.id_system).then(function(response){
          return response.data;
        });
      }
    }
  }

//=================Módulo=================

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
    template: "<modman-module-register></modman-module-register>",
  }

  var moduleEditState = {
    name: 'module_edit',
    url: '/module_edit/:id_module',
    template: "<modman-module-edit module='$resolve.module'></modman-module-edit>",
    resolve: {
      module: function($http, $stateParams){
        return $http.get(ENVIROMENT + 'api/module/' + $stateParams.id_module).then(function(response){
          return response.data;
        });
      }
    }
  }

//=================Perfil=================

  var profileState = {
    name: 'profiles',
    url: '/profiles',
    template: "<modman-profiles profiles='$resolve.profiles'></modman-profiles>",
    resolve: {
      profiles: function($http){
        return $http.get(ENVIROMENT + "api/profile/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var profileRegisterState = {
    name: 'profile_register',
    url: '/profile_register',
    template: "<modman-profile-register profiles='$resolve.profiles'></modman-profile-register>",
    resolve: {
      profiles: function($http){
        return $http.get(ENVIROMENT + "api/profile/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var profileEditState = {
    name: 'profile_edit',
    url: '/profile_edit/:id_profile',
    template: "<modman-profile-edit profile='$resolve.profile'></modman-profile-edit>",
    resolve: {
      profile: function($http, $stateParams){
        return $http.get(ENVIROMENT + 'api/profile/' + $stateParams.id_profile).then(function (response) {
            return response.data;
        });
      }
    }
  }

//=================Cliente/Sistema=================

  var clientSystemsState = {
    name: 'client_systems',
    url: '/client_systems',
    template: "<modman-client-systems clientsystems='$resolve.clientsystems'></modman-client-systems>",
    resolve: {
      clientsystems: function($http){
        return $http.get(ENVIROMENT + "api/client_system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var clientSystemRegisterState = {
    name: 'client_system_register',
    url: '/client_system_register',
    template: "<modman-client-system-register clients='$resolve.clients' systems='$resolve.systems'></modman-client-system-register>",
    resolve: {
      clients: function($http){
        return $http.get(ENVIROMENT + "api/client").then(function (response) {
            return response.data;
        });
      },
      systems: function($http){
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var clientSystemsEditState = {
    name: 'client_system_edit',
    url: '/client_system_edit/:idclientsystem',
    template: "<modman-client-system-edit clients='$resolve.clients' systems='$resolve.systems' clientsystem='$resolve.clientsystem'></modman-client-system-edit>",
    resolve: {
      clientsystem: function($http, $stateParams){
        return $http.get(ENVIROMENT + "api/client_system/" + $stateParams.idclientsystem).then(function (response) {
            return response.data;
        });
      },
      clients: function($http){
        return $http.get(ENVIROMENT + "api/client").then(function (response) {
            return response.data;
        });
      },
      systems: function($http){
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

//=================Sistema/Módulo=================

var systemModuleState = {
    name: 'system_modules',
    url: '/system_modules',
    template: "<modman-system-modules systemmodules='$resolve.systemmodules'></modman-system-modules>",
    resolve: {
      systemmodules: function($http){
        return $http.get(ENVIROMENT + "api/system_module/").then(function (response) {
            return response.data;
        });
      }
    }
  }

var systemModuleRegisterState = {
  name: 'system_module_register',
  url: '/system_module_register',
  template: "<modman-system-module-register modules='$resolve.modules' systems='$resolve.systems'></modman-system-module-register>",
  resolve: {
    modules: function($http){
      return $http.get(ENVIROMENT + "api/module").then(function (response) {
          return response.data;
      });
    },
    systems: function($http){
      return $http.get(ENVIROMENT + "api/system/").then(function (response) {
          return response.data;
      });
    }
  }
}

  var systemModuleEditState = {
    name: 'system_module_edit',
    url: '/system_module_edit/:idsystemmodule',
    template: "<modman-system-module-edit systemmodule='$resolve.systemmodule' modules='$resolve.modules' systems='$resolve.systems'></modman-system-module-edit>",
    resolve: {
      systemmodule: function($http, $stateParams){
        return $http.get(ENVIROMENT + "api/system_module/" + $stateParams.idsystemmodule).then(function (response) {
            return response.data;
        });
      },
      modules: function($http){
        return $http.get(ENVIROMENT + "api/module").then(function (response) {
            return response.data;
        });
      },
      systems: function($http){
        return $http.get(ENVIROMENT + "api/system/").then(function (response) {
            return response.data;
        });
      }
    }
  }

//=================Funcionalidade=================

  var functionalityState = {
    name: 'functionalities',
    url: '/functionalities',
    template: "<modman-functionalities functionalities='$resolve.functionalities'></modman-functionalities>",
    resolve: {
      functionalities: function($http){
        return $http.get(ENVIROMENT + "api/module_functionality").then(function (response) {
            return response.data;
        });
      }
    }
  }

 var functionalityRegisterState = {
    name: 'functionality_register',
    url: '/functionality_register',
    template: "<modman-functionality-register modules='$resolve.modules'></modman-functionality-register>",
    resolve:{
      modules: function($http){
        return $http.get(ENVIROMENT + "api/module").then(function (response) {
            return response.data;
        });
      }
    }
 }

 var functionalityEditState = {
    name: 'functionality_edit',
    url: '/functionality_edit/:id_functionality',
    template: "<modman-functionality-edit functionality='$resolve.functionality' modules='$resolve.modules'></modman-functionality-edit>",
    resolve:{
      functionality: function($http, $stateParams){
        return $http.get(ENVIROMENT + 'api/module_functionality/' + $stateParams.id_functionality).then(function(response){
          return response.data;
        });
      },
      modules: function($http){
        return $http.get(ENVIROMENT + "api/module").then(function (response) {
            return response.data;
        });
      }
    }
  }

//=================Cliente-Sistema/Módulo-Funcionalidade/Perfil=================

  var cliSysModFuncProfileState = {
    name: 'cli_sys_mod_func_profile',
    url: '/cli_sys_mod_func_profile',
    template: "<modman-cli-sys_mod-func-profile clisysmodfuncprofiles='$resolve.clisysmodfuncprofiles'></modman-cli-sys-mod-func-profile>",
    resolve: {
      clisysmodfuncprofiles: function($http){
        return $http.get(ENVIROMENT + "api/cli_sys_mod_func_profile/").then(function (response) {
            return response.data;
        });
      }
    }
  }

  var cliSysModFuncProfileRegisterState = {
    name: 'cli_sys_mod_func_profile_register',
    url: '/cli_sys_mod_func_profile_register',
    template: "<modman-cli-sys_mod-func-profile-register clientsystems='$resolve.clientsystems' modulefunctionalities='$resolve.modulefunctionalities' profiles='$resolve.profiles'></modman-cli-sys_mod-func-profile-register>",
    resolve: {
      clientsystems: function($http, $stateParams){
        return $http.get(ENVIROMENT + "api/client_system/").then(function (response) {
            return response.data;
        });
      },
      modulefunctionalities: function($http){
        return $http.get(ENVIROMENT + "api/module_functionality").then(function (response) {
            return response.data;
        });
      },
      profiles: function($http){
        return $http.get(ENVIROMENT + "api/profile").then(function (response) {
            return response.data;
        });
      }
    }
  }

var cliSysModFuncProfileEditState = {
    name: 'cli_sys_mod_func_profile_edit',
    url: '/cli_sys_mod_func_profile_edit/:idclisysmodfuncprofile',
    template: "<modman-cli-sys_mod-func-profile-edit clisysmodfuncprofile='$resolve.clisysmodfuncprofile' clientsystems='$resolve.clientsystems' modulefunctionalities='$resolve.modulefunctionalities' profiles='$resolve.profiles'></modman-cli-sys_mod-func-profile-edit>",
    resolve: {
      clisysmodfuncprofile: function($http, $stateParams){
        console.log($stateParams.idclisysmodfuncprofile);
        return $http.get(ENVIROMENT + 'api/cli_sys_mod_func_profile/' + $stateParams.idclisysmodfuncprofile).then(function (response) {
          console.log(response.data);
          return response.data;
        });
      },
      clientsystems: function($http, $stateParams){
        return $http.get(ENVIROMENT + "api/client_system/").then(function (response) {
            return response.data;
        });
      },
      modulefunctionalities: function($http){
        return $http.get(ENVIROMENT + "api/module_functionality").then(function (response) {
            return response.data;
        });
      },
      profiles: function($http){
        return $http.get(ENVIROMENT + "api/profile").then(function (response) {
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

  $stateProvider.state(profileState);
  $stateProvider.state(profileRegisterState);
  $stateProvider.state(profileEditState);

  $stateProvider.state(clientSystemsState);
  $stateProvider.state(clientSystemRegisterState);
  $stateProvider.state(clientSystemsEditState);

  $stateProvider.state(systemModuleState);
  $stateProvider.state(systemModuleRegisterState);
  $stateProvider.state(systemModuleEditState);

  $stateProvider.state(functionalityState);
  $stateProvider.state(functionalityRegisterState);
  $stateProvider.state(functionalityEditState);

  $stateProvider.state(cliSysModFuncProfileState);
  $stateProvider.state(cliSysModFuncProfileRegisterState);
  $stateProvider.state(cliSysModFuncProfileEditState);

});
