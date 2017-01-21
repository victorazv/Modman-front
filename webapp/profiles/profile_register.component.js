function ProfileRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.profile = {};
	self.registerData = registerData;
	self.title = "Cadastro de perfil";
	self.buttonLabel = "Cadastrar"

	function registerData(profile){
		return $http.post(ENVIROMENT + 'api/profile', profile).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('profile_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanProfileRegister', {
	templateUrl: 'webapp/profiles/profile_form.html',
	controller: ProfileRegisterComponentController,
});