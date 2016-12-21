function ModuleEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de módulo";
	self.buttonLabel = "Salvar"

	function registerData(module){
		return $http.put(ENVIROMENT + 'api/module/' + module.id, module).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanModuleEdit', {
	templateUrl: 'webapp/modules/module_form.html',
	controller: ModuleEditComponentController,
	bindings: {
		module:  '<'
	}
});