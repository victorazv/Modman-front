function CliSysModFuncProfileEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de Funcionalidade/Cliente";
	self.buttonLabel = "Salvar";

	function registerData(clisysmodfuncprofile){
		return $http.put(ENVIROMENT + 'api/cli_sys_mod_func_profile/' + clisysmodfuncprofile.id, clisysmodfuncprofile).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanCliSysModFuncProfileEdit', {
	templateUrl: 'webapp/cli_sys_mod_func_profile/cli_sys_mod_func_profile_form.html',
	controller: CliSysModFuncProfileEditComponentController,
	bindings: {
		clisysmodfuncprofile: '<',
		clientsystems: '<',
		module_functionalities: '<',
		profiles: '<'
	}
});