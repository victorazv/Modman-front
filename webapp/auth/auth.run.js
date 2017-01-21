function AuthRun(AuthService, $rootScope, $state, $urlRouter) {
    $rootScope.$on("$stateChangeStart", function (event, toState) {
        if (toState.name == "login" && AuthService.isAuthenticated()) {
            event.preventDefault();
            return $state.go('app.home');
        }
        if (toState.data.auth && !AuthService.isAuthenticated()) {
            event.preventDefault();
            return $state.go('login');
        }
    });

    //Detect Denied Permission when navigating
    $rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams, options) {
        alert('Você não tem permissão para fazer isto.');
    });

}

modman.run(AuthRun);