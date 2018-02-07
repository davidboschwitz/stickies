(function() {
    'use strict';
    stickiesApp
        .directive('keyControl', function() {
            return function(scope, element, attrs) {
                element.bind("keydown keypress", function(event) {
                    console.log(event.which)
                });
            };
        });
})();
