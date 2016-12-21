function SystemModuleRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.clientsystem = {};
	self.registerData = registerData;
	self.title = "Cadastro de sistema/módulo";
	self.buttonLabel = "Cadastrar"

	function registerData(systemmodule){
		return $http.post(ENVIROMENT + 'api/system_module', systemmodule).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('system_module_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanSystemModuleRegister', {
	templateUrl: 'webapp/system_modules/system_module_form.html',
	controller: SystemModuleRegisterComponentController,
	bindings:{
		modules: '<',
		systems: '<'
	}
});