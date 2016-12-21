function SystemsComponentController($http, ENVIROMENT, ngToast){
	var self = this;

	self.deleteData = deleteData;

	function deleteData(system){
		return $http.delete(ENVIROMENT + 'api/system/' + system.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.systems.indexOf(system);
			if(index > -1){
				self.systems.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanSystems', {
	templateUrl: 'webapp/systems/systems.html',
	controller: SystemsComponentController,
	bindings: {
		systems: '<'
	}
});