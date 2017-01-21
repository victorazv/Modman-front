modman.config(["$httpProvider", function($httpProvider) {
  $httpProvider.interceptors.push('HttpInterceptor');
}]);