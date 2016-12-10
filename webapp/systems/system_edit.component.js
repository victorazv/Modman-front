function SystemEditComponentController($http, ENVIROMENT, $stateParams){
	var self = this;

	self.updateData = updateData;
	self.system = $stateParams.system;

	function updateData(system){
		return $http.put(ENVIROMENT + 'api/system/' + system).then(function(response){
		});
	}

}

modman.component('modmanSystemEdit', {
	templateUrl: 'webapp/systems/system_edit.html',
	controller: SystemEditComponentController,
});