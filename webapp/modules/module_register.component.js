function ModuleRegisterComponentController($http, ENVIROMENT){
	var self = this;
	self.module = {};
	self.sendData = sendData;

	function sendData(module){
		return $http.post(ENVIROMENT + 'api/module', module).then(function(response){
			console.log(response);
		});
	}
}

modman.component('modmanModuleRegister', {
	templateUrl: 'webapp/modules/module_register.html',
	controller: ModuleRegisterComponentController,
	bindings: {
		systems: '<'
	}
});