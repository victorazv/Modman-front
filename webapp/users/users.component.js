function UsersComponentController($http, ENVIROMENT, ngToast){
	var self = this;

	self.deleteData = deleteData;

	function deleteData(user){
		return $http.delete(ENVIROMENT + 'api/user/' + user.id).then(function(response){
			ngToast.create('Registro excluído com sucesso !');
			var index = self.users.indexOf(user);
			if(index > -1){
				self.users.splice(index, 1);
			}
		}).catch(function(){
			ngToast.create({
			  className: 'warning',
			  content: 'Não foi possível excluir o registro !'
			});
		});
	}
}

modman.component('modmanUsers', {
	templateUrl: 'webapp/users/users.html',
	controller: UsersComponentController,
	bindings: {
		users: '<'
	}
});