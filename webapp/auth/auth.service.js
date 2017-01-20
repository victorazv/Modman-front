modman.service('AuthService', AuthService);

function AuthService($auth, localStorageService, $http, $urlRouter, $state) {
    var self = this;

    self.authenticate = authenticate;
    self.isAuthenticated = isAuthenticated;
    self.logout = logout;
    self.authUser = "";

    activate();

    function activate() {
        if (isAuthenticated() && self.authUser.length === 0) {
            if (localStorageService.get('authUser')) {
                self.authUser = localStorageService.get('authUser');
            }
        }
    }

    function authenticate(user) { //User object with email and password
        return $auth.login(user).then(function (response) {
            self.authUser = response.data.user;
            localStorageService.set('authUser', self.authUser);
        });
    }

    function isAuthenticated() {
        return $auth.isAuthenticated();
    }

    function logout() {
        localStorageService.remove('authUser');
        return $auth.logout();
    }

}