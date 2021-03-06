/*
 * http://stackoverflow.com/questions/17470790/how-to-use-a-keypress-event-in-angularjs
 */
(function() {
    'use strict';
    stickiesApp
        .directive('ngEnter', function() {
            return function(scope, element, attrs) {
                element.bind("keydown keypress", function(event) {
                    if (event.which === 13) {
                        scope.$apply(function() {
                            scope.$eval(attrs.ngEnter);
                        });
                        event.preventDefault();
                    }
                });
            };
        });
})();
