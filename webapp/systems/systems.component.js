function SystemsComponentController($http, ENVIROMENT){
	var self = this;

	self.deleteData = deleteData;

	function deleteData(system){
		console.log(system);
		return $http.delete(ENVIROMENT + 'api/system/' + system.id).then(function(response){
			var index = self.systems.indexOf(system);
			if(index > -1){
				self.systems.splice(index, 1);
			}
		}).catch(function(){

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