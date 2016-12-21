function ClientSystemEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de cliente/sistema";
	self.buttonLabel = "Salvar";

	function registerData(clientsystem){
		return $http.put(ENVIROMENT + 'api/client_system/' + clientsystem.id, clientsystem).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanClientSystemEdit', {
	templateUrl: 'webapp/client_systems/client_system_form.html',
	controller: ClientSystemEditComponentController,
	bindings: {
		clientsystem: '<',
		clients: '<',
		systems: '<'
	}
});