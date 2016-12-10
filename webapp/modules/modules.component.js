function ModulesComponentController(){
	var self = this;
}

modman.component('modmanModules', {
	templateUrl: 'webapp/modules/modules.html',
	controller: ModulesComponentController,
	bindings: {
		modules: '<'
	}
});