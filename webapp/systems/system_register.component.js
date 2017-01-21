function SystemRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.system = {};
	self.registerData = registerData;
	self.title = "Cadastro de sistema";
	self.buttonLabel = "Cadastrar"

	function registerData(system){
		return $http.post(ENVIROMENT + 'api/system', system).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('system_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanSystemRegister', {
	templateUrl: 'webapp/systems/system_form.html',
	controller: SystemRegisterComponentController,
});