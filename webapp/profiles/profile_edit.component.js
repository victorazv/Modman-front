function ProfileEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de perfil";
	self.buttonLabel = "Salvar";

	function registerData(profile){
		return $http.put(ENVIROMENT + 'api/profile/' + profile.id, profile).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanProfileEdit', {
	templateUrl: 'webapp/profiles/profile_form.html',
	controller: ProfileEditComponentController,
	bindings:{
		profile: '<',
	}
});