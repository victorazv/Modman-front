function ModulesComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(module){
		return $http.delete(ENVIROMENT + 'api/module/' + module.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.modules.indexOf(module);
			if(index > -1){
				self.modules.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanModules', {
	templateUrl: 'webapp/modules/modules.html',
	controller: ModulesComponentController,
	bindings: {
		modules: '<'
	}
});