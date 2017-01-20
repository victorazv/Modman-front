function UserRegisterComponentController($http, ENVIROMENT, ngToast, $location){
	var self = this;
	self.user = {};
	self.registerData = registerData;
	self.title = "Cadastro de usuário";
	self.buttonLabel = "Cadastrar"

	function registerData(user){
		return $http.post(ENVIROMENT + 'api/user', user).then(function(response){
			ngToast.create('Registro inserido com sucesso !');
			$location.path('user_edit/' + response.data.id);
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível inserir o registro !'
			});
		});
	}
}

modman.component('modmanUserRegister', {
	templateUrl: 'webapp/users/user_form.html',
	controller: UserRegisterComponentController,
});