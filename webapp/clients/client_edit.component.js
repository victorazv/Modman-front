function ClientEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de cliente";
	self.buttonLabel = "Salvar";

	function registerData(client){
		return $http.put(ENVIROMENT + 'api/client/' + client.id, client).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanClientEdit', {
	templateUrl: 'webapp/clients/client_form.html',
	controller: ClientEditComponentController,
	bindings: {
		client: '<'
	}
});