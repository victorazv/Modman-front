function AuthRun(AuthService, $rootScope, $state, $urlRouter) {
    console.log($state.current);
    $rootScope.$on("$stateChangeStart", function (event, toState) {
        if (toState.name == "login" && AuthService.isAuthenticated()) {
    console.log('teste');
            event.preventDefault();
            return $state.go('app.home');
        }
        if (toState.data.auth && !AuthService.isAuthenticated()) {
            event.preventDefault();
            console.log('teste2');
            return $state.go('login');
        }
    });

    //Detect Denied Permission when navigating
    $rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams, options) {
        alert('Você não tem permissão para fazer isto.');
    });

}

modman.run(AuthRun);