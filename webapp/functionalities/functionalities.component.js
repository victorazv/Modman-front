function FunctionalitiesComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(profile){
		return $http.delete(ENVIROMENT + 'api/module_functionality/' + profile.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.functionalities.indexOf(profile);
			if(index > -1){
				self.functionalities.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanFunctionalities', {
	templateUrl: 'webapp/functionalities/functionalities.html',
	controller: FunctionalitiesComponentController,
	bindings: {
		functionalities: '<'
	}
});