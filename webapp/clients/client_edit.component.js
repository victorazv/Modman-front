function ClientEditComponentController($http, ENVIROMENT, $stateParams){
	var self = this;

	self.updateData = updateData;
	self.client = $stateParams.client;

	function updateData(client){
		return $http.put(ENVIROMENT + 'api/client/' + client).then(function(response){
		});
	}

}

modman.component('modmanClientEdit', {
	templateUrl: 'webapp/clients/client_edit.html',
	controller: ClientEditComponentController,
});