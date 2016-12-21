function SystemModuleEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de sistema/módulo";
	self.buttonLabel = "Salvar";

	function registerData(systemmodule){
		return $http.put(ENVIROMENT + 'api/system_module/' + systemmodule.id, systemmodule).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanSystemModuleEdit', {
	templateUrl: 'webapp/system_modules/system_module_form.html',
	controller: SystemModuleEditComponentController,
	bindings: {
		systemmodule: '<',
		modules: '<',
		systems: '<'
	}
});