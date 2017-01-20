function MenuComponentController(AuthService, $state){
   var self = this;

    self.authenticated = AuthService.isAuthenticated();
    self.logout = logout;

    function logout(){
        AuthService.logout();
        self.authenticated = AuthService.isAuthenticated();
        $state.go('login');
    }

   
}


modman.component('modmanMenu', {
	templateUrl: 'webapp/shared/menu/menu.html',
	controller: MenuComponentController
});