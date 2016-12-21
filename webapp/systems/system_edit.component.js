function SystemEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de sistema";
	self.buttonLabel = "Salvar"

	function registerData(system){
		return $http.put(ENVIROMENT + 'api/system/' + system.id, system).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanSystemEdit', {
	templateUrl: 'webapp/systems/system_form.html',
	controller: SystemEditComponentController,
	bindings:{
		system: '<'
	}
});