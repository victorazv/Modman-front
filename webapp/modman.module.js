'use strict';
//http://modman.dev/
var modman = angular.module('modman', [
	'ui.router', 
	'ngToast', 
	'oitozero.ngSweetAlert', 
	'satellizer', 
	'LocalStorageModule'])
					.constant('ENVIROMENT', 'http://api.modman.ga/');