function ProfilesComponentController($http, ENVIROMENT, ngToast){
	var self = this;
	self.deleteData = deleteData;

	function deleteData(profile){
		return $http.delete(ENVIROMENT + 'api/profile/' + profile.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.profiles.indexOf(profile);
			if(index > -1){
				self.profiles.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanProfiles', {
	templateUrl: 'webapp/profiles/profiles.html',
	controller: ProfilesComponentController,
	bindings: {
		profiles: '<'
	}
});