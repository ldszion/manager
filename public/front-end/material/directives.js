(function() {
    'use strict';

    angular
        .module('materialAdmin')
        .directive('toggleSubmenu', toggleSubmenuDirective)
        .directive('cOverflow', cOverflowDirective)
        .directive('btn', btnDirective)
        .directive('toggleFullscreen', toggleFullscreenDirective);

    function toggleSubmenuDirective() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.click(function(){
                    element.next().slideToggle(200);
                    element.parent().toggleClass('toggled');
                });
            }
        }
    }

    // =========================================================================
    // MALIHU SCROLL
    // =========================================================================

    //On Custom Class
    cOverflowDirective.$inject = ['scrollService'];
    function cOverflowDirective(scrollService){
        return {
            restrict: 'C',
            link: function(scope, element) {

                if (!$('html').hasClass('ismobile')) {
                    scrollService.malihuScroll(element, 'minimal-dark', 'y');
                }
            }
        }
    }

    // =========================================================================
    // WAVES
    // =========================================================================

    // For .btn classes
    btnDirective.$inject = ['$window'];
    function btnDirective($window){
        return {
            restrict: 'C',
            link: function(scope, element) {
                if(element.hasClass('btn-icon') || element.hasClass('btn-float')) {
                    $window.Waves.attach(element, ['waves-circle']);
                }

                else if(element.hasClass('btn-light')) {
                    $window.Waves.attach(element, ['waves-light']);
                }

                else {
                    $window.Waves.attach(element);
                }

                $window.Waves.init();
            }
        }
    }
    // For .btn classes
    toggleFullscreenDirective.$inject = ['$document'];
    function toggleFullscreenDirective($document){
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.on('click', function(event) {
                    var document = $document[0];
                    //Launch
                    function launchIntoFullscreen(element) {
                        if(element.requestFullscreen) {
                            element.requestFullscreen();
                        } else if(element.mozRequestFullScreen) {
                            element.mozRequestFullScreen();
                        } else if(element.webkitRequestFullscreen) {
                            element.webkitRequestFullscreen();
                        } else if(element.msRequestFullscreen) {
                            element.msRequestFullscreen();
                        }
                    }

                    //Exit
                    function exitFullscreen() {
                        if(document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if(document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if(document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }

                    if (exitFullscreen()) {
                        launchIntoFullscreen(document.documentElement);
                    }
                    else {
                        launchIntoFullscreen(document.documentElement);
                    }
                });
            }
        }
    }

})();
