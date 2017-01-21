function HttpInterceptor($q, $injector) {
    return {
        // On request success
        request: function (config) {
            // Return the config or wrap it in a promise if blank.
            return config || $q.when(config);
        },
        // On request failure
        requestError: function (rejection) {
            // Return the promise rejection.
            return $q.reject(rejection);
        },
        // On response success
        response: function (response) {
            // Return the response or promise.
            return response || $q.when(response);
        },
        // On response failture
        responseError: function (rejection) {
            //console.log(rejection); // Contains the data about the error.
            var state = $injector.get('$state');
            var auth = $injector.get('$auth');
            var SweetAlert = $injector.get('SweetAlert');
            if(rejection.status === 400 && rejection.data.error == 'token_not_provided'){
                state.go('login');
            }
            if(rejection.status === 400 && (rejection.data.error == 'token_expired' || rejection.data.error == 'token_invalid')){
                SweetAlert.swal('Ops!', 'Sessão expirada', 'error');
                $auth.logout();
                state.go('login');
            }

            // TODO: Lembrar de mudar isso. Colocar uma variável de ambiente.
            if (rejection.status === 401 && reject.config.url != 'http://modman.dev/api/authenticate') {
                state.go('login');
                SweetAlert.swal('Ops!', 'Acesso Negado', 'error');
            }
            // Return the promise rejection.
            return $q.reject(rejection);
        }
    };
}

modman.factory('HttpInterceptor', HttpInterceptor);