function ClientSystemRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.clientsystem = {};
	self.registerData = registerData;
	self.title = "Cadastro de cliente/sistema";
	self.buttonLabel = "Cadastrar"

	function registerData(clientsystem){
		return $http.post(ENVIROMENT + 'api/client_system', clientsystem).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('client_system_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanClientSystemRegister', {
	templateUrl: 'webapp/client_systems/client_system_form.html',
	controller: ClientSystemRegisterComponentController,
	bindings:{
		clients: '<',
		systems: '<'
	}
});