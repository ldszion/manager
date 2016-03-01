(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$localStorage'];

    /**
     * Controller da Aplicação como um todo. Esse controller é utilizado para função gerais que serão
     * utilizadas por toda a aplicação.
     * @param {Object} $localStorage Serviço de armazenamento em Local Storage
     */
    function AppController($localStorage) {
        var app = this;
        app.toggleLayout  = toggleLayout;
        app.toggleSidebar = toggleSidebar;
        app.changeSkin    = changeSkin;
        app.skinList      = [];

        activate();

        /////////////////

        /**
         * Funcao que inicializa o controller
         * @return {void}
         */
        function activate() {
            // Variaveis
            app.$storage = $localStorage.$default({
                boxedLayout: true,
                currentSkin: 'blue'
            });
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
               angular.element('html').addClass('ismobile');
            }
            app.skinList = [
                'blue',
                'bluegray',
                'purple',
                'orange',
                'teal',
                'pink',
                'green',
                'cyan',
                'lightblue',
            ];
        }

        /**
         * Modifica se é boxed layout ou não
         * @return {void}
         */
        function toggleLayout() {
            $localStorage.boxedLayout = !$localStorage.boxedLayout;
        }

        /**
         * Mostra ou esconde a sidebar
         * @return {void}
         */
        function toggleSidebar() {
            app.$storage.toggleSidebar = !app.$storage.toggleSidebar;
        }

        /**
         * Altera a cor skin do header e do template como um todo.
         * @param  {string} color Cor da nova skin
         * @return {void}
         */
        function changeSkin(color) {
            app.$storage.currentSkin = color;
        }
    }
})();