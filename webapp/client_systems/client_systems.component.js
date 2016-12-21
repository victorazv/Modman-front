function ClientSystemsComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(clientsystem){
		return $http.delete(ENVIROMENT + 'api/client_system/' + clientsystem.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.clientsystems.indexOf(clientsystem);
			if(index > -1){
				self.clientsystems.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanClientSystems', {
	templateUrl: 'webapp/client_systems/client_systems.html',
	controller: ClientSystemsComponentController,
	bindings: {
		clientsystems: '<',
	}
});