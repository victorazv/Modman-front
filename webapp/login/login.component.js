function LoginComponentController($http, ENVIROMENT, ngToast, $location, AuthService){
   var self = this;

    self.authenticate = authenticate;

    self.user = {
        email: null,
        password: null
    };

    function authenticate(user){
        AuthService.authenticate(user);
    }
}


modman.component('modmanLogin', {
	templateUrl: 'webapp/login/login.html',
	controller: LoginComponentController
});