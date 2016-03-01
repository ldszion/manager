(function() {
    'use strict';

    angular
        .module('app', [
            // Terceiros
            'ui.router',
            'ui.bootstrap',
            'angular-loading-bar',
            'ngAnimate',
            'ngStorage',
            // App
            'app.templates',
            // Theme
            'materialAdmin',
        ]);
})();