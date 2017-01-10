function CliSysModFuncProfileRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.clientsystem = {};
	self.registerData = registerData;
	self.title = "Cadastro de Funcionalidade/Cliente";
	self.buttonLabel = "Cadastrar"

	function registerData(clisysmodfuncprofile){
		return $http.post(ENVIROMENT + 'api/cli_sys_mod_func_profile', clisysmodfuncprofile).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('cli_sys_mod_func_profile_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanCliSysModFuncProfileRegister', {
	templateUrl: 'webapp/cli_sys_mod_func_profile/cli_sys_mod_func_profile_form.html',
	controller: CliSysModFuncProfileRegisterComponentController,
	bindings:{
		clientsystems: '<',
		module_functionalities: '<',
		profiles: '<'
	}
});