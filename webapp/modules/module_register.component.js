function ModuleRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.module = {};
	self.registerData = registerData;
	self.title = "Cadastro de módulo";
	self.buttonLabel = "Cadastrar"

	function registerData(module){
		module.id_users = window.localStorage.getItem("id_user");
		return $http.post(ENVIROMENT + 'api/module', module).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('module_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanModuleRegister', {
	templateUrl: 'webapp/modules/module_form.html',
	controller: ModuleRegisterComponentController,
	bindings: {
		systems: '<'
	}
});