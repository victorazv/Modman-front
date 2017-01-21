function ClientRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.client = {};
	self.registerData = registerData;
	self.title = "Cadastro de cliente";
	self.buttonLabel = "Cadastrar"

	function registerData(client){
		return $http.post(ENVIROMENT + 'api/client', client).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('client_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanClientRegister', {
	templateUrl: 'webapp/clients/client_form.html',
	controller: ClientRegisterComponentController,
});