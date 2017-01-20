function UserEditComponentController($http, ENVIROMENT, $stateParams, ngToast){
	var self = this;
	self.registerData = registerData;
	self.title = "Edição de usuário";
	self.buttonLabel = "Salvar";

	function registerData(user){
		return $http.put(ENVIROMENT + 'api/user/' + user.id, user).then(function(response){
			ngToast.create('Registro atualizado com sucesso !');
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível atualizar o registro !'
			});
		});
	}
}

modman.component('modmanUserEdit', {
	templateUrl: 'webapp/users/user_form.html',
	controller: UserEditComponentController,
	bindings: {
		user: '<'
	}
});