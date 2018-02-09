(function() {
    'use strict';
    stickiesApp.

    service('inactivity', function($window, $interval) {
        var ticks = 0;
        var inactivityOverQueue = [];
        var inactivity = {
            reset: function() {
                if (ticks > 300) {
                    $window.location.reload();
                    return;
                }
                ticks = 0;
                if (ticks > 30) {
                    for (func in inactivityOverQueue)
                        func();
                }
            },
            tick: function() {
                ticks++;
            },
            getTicks: function() {
                return ticks;
            },
            isInactive: function() {
                return ticks > 30;
            },
            queueFunction: function(func) {
                inactivityOverQueue.push(func);
            }
        };

        window.onload = inactivity.reset;
        window.onmousemove = inactivity.reset;
        window.onmousedown = inactivity.reset;
        window.onclick = inactivity.reset;
        window.onscroll = inactivity.reset;
        window.onkeypress = inactivity.reset;

        $interval(inactivity.tick, 1000);

        return inactivity;
    });

})();
