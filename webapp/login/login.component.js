function LoginComponentController($http, ENVIROMENT, ngToast, $location, AuthService, SweetAlert){
   var self = this;

    self.authenticate = authenticate;

    self.user = {
        email: null,
        password: null
    };

    function authenticate(user){
        AuthService.authenticate(user).then(function(response){
			console.log('to bem');
            var name = localStorageService.get('authUser').name;
            $state.go('home');
        }).catch(function(response){
			console.log('deu merda');
            SweetAlert.swal("Erro ao fazer login", "Email ou senha não conferem. Tente novamente.", "error");
        });
    }
}


modman.component('modmanLogin', {
	templateUrl: 'webapp/login/login.html',
	controller: LoginComponentController
});