function SystemModulesComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(clisysmodfuncprofile){
		return $http.delete(ENVIROMENT + 'api/cli_sys_mod_func_profile/' + clisysmodfuncprofile.id)
		.then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.clisysmodfuncprofiles.indexOf(clisysmodfuncprofile);
			if(index > -1){
				self.clisysmodfuncprofiles.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanCliSysModFuncProfile', {
	templateUrl: 'webapp/cli_sys_mod_func_profile/cli_sys_mod_func_profile.html',
	controller: SystemModulesComponentController,
	bindings: {
		clisysmodfuncprofiles: '<'
	}
});
