function AuthConfig($authProvider, $urlRouterProvider, ENVIROMENT){
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = false;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = ENVIROMENT + 'api/authenticate';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';
    $authProvider.storageType = 'localStorage';

    // Prevent router from automatic state resolving
    //$urlRouterProvider.deferIntercept();
    
}

modman.config(AuthConfig);