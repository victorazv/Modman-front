function SystemModulesComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(systemmodule){
		return $http.delete(ENVIROMENT + 'api/system_module/' + systemmodule.id)
		.then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.systemmodules.indexOf(systemmodule);
			if(index > -1){
				self.systemmodules.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanSystemModules', {
	templateUrl: 'webapp/system_modules/system_modules.html',
	controller: SystemModulesComponentController,
	bindings: {
		systemmodules: '<'
	}
});