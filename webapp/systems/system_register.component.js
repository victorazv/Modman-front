function SystemRegisterComponentController($http, ENVIROMENT){
	var self = this;
	self.system = {};
	self.sendData = sendData;

	function sendData(system){

		return $http.post(ENVIROMENT + 'api/system', system).then(function(response){
		});
	}
}

modman.component('modmanSystemRegister', {
	templateUrl: 'webapp/systems/system_register.html',
	controller: SystemRegisterComponentController,
});