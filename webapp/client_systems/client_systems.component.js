function ClientSystemsComponentController(){
	var self = this;
}

modman.component('modmanClientSystem', {
	templateUrl: 'webapp/client_systems/client_systems.html',
	controller: ClientSystemsComponentController,
	bindings: {
		client_systems: '<'
	}
});