function ClientsComponentController($http, ENVIROMENT, ngToast){
	var self = this;

	self.deleteData = deleteData;

	function deleteData(client){
		return $http.delete(ENVIROMENT + 'api/client/' + client.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.clients.indexOf(client);
			if(index > -1){
				self.clients.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanClients', {
	templateUrl: 'webapp/clients/clients.html',
	controller: ClientsComponentController,
	bindings: {
		clients: '<'
	}
});