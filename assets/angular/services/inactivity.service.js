(function() {
    'use strict';
    stickiesApp.

    service('inactivity', function($window, $interval) {
        var ticks = 0;
        var obj = {
            reset: function() {
                ticks = 0;
            },
            tick: function() {
                ticks++;
            },
            getTicks: function() {
                return ticks;
            },
            isInactive: function() {
                return ticks > 120;
            }
        };

        window.onload = obj.reset;
        window.onmousemove = obj.reset;
        window.onmousedown = obj.reset; // catches touchscreen presses
        window.onclick = obj.reset; // catches touchpad clicks
        window.onscroll = obj.reset; // catches scrolling with arrow keys
        window.onkeypress = obj.reset;

        $interval(obj.tick, 1000);

        return obj;
    });

})();
