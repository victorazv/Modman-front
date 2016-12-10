function ClientRegisterComponentController($http, ENVIROMENT){
	var self = this;
	self.client = {};
	self.sendData = sendData;

	function sendData(client){
		return $http.post(ENVIROMENT + 'api/client', client).then(function(response){
		});
	}
}

modman.component('modmanClientRegister', {
	templateUrl: 'webapp/clients/client_register.html',
	controller: ClientRegisterComponentController,
});