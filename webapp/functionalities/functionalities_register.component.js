function FunctionalityRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.functionality = {};
	self.registerData = registerData;
	self.title = "Cadastro de funcionalidade";
	self.buttonLabel = "Cadastrar"

	function registerData(functionality){
		functionality.id_users = window.localStorage.getItem("id_user");
		return $http.post(ENVIROMENT + 'api/module_functionality', functionality).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('functionality_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanFunctionalityRegister', {
	templateUrl: 'webapp/functionalities/functionality_form.html',
	controller: FunctionalityRegisterComponentController,
	bindings:{
		modules: '<'
	}
});