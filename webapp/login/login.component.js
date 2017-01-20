function LoginComponentController($http, ENVIROMENT, ngToast, $location, AuthService, SweetAlert){
   var self = this;

    self.authenticate = authenticate;

    self.user = {
        email: null,
        password: null
    };

    function authenticate(user){
        AuthService.authenticate(user).then(function(){
            SweetAlert.swal("Bem vindo", "", "success");
            $state.go('app.home');
        }, function(){
            SweetAlert.swal("Erro ao fazer login", "Email ou senha não conferem. Tente novamente.", "error");
        });
    }
}


modman.component('modmanLogin', {
	templateUrl: 'webapp/login/login.html',
	controller: LoginComponentController
});