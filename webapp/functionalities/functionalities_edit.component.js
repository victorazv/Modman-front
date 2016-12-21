function FunctionalityEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de perfil";
	self.buttonLabel = "Salvar";

	function registerData(functionality){
		return $http.put(ENVIROMENT + 'api/module_functionality/' + functionality.id, functionality).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanFunctionalityEdit', {
	templateUrl: 'webapp/functionalities/functionality_form.html',
	controller: FunctionalityEditComponentController,
	bindings:{
		functionality: '<',
		modules: '<'
	}
});