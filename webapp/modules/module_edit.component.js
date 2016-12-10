function ModuleEditComponentController($http, ENVIROMENT, $stateParams){
	var self = this;

	self.updateData = updateData;
	self.module = $stateParams.module;

	function updateData(module){
		return $http.put(ENVIROMENT + 'api/module/' + module).then(function(response){
		});
	}
}

modman.component('modmanModuleEdit', {
	templateUrl: 'webapp/modules/module_edit.html',
	controller: ModuleEditComponentController,
	bindings: {
		systems: '<'
	}
});