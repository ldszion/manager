(function() {
    'use strict';

    angular
      .module('app')
      .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                // abstract: true,
                url: '/',
                views: {
                    'index': {
                        templateUrl: 'theme/views/app.html',
                    }
                }
            });
        $urlRouterProvider
            .when('', '/')
            .otherwise('/404');
    }
})();