(function() {
    'use strict';
    stickiesApp.

    controller('stickyController', function($scope, $route, $timeout, $interval, orchestration, inactivity) {
        var stickyID = $scope.stickyID = $route.current.params.stickyID;

        function load() {
            if (inactivity.isInactive())
                return;
            orchestration.load(stickyID).then(function(response) {
                if (!response.data || !!response.data.error) {
                    alert("error loading!");
                    return;
                }
                if (!$scope.data || $scope.data.time == undefined || $scope.data.time != response.data.time)
                    $scope.data = response.data;
            });
        }
        $scope.load = load;

        function save() {
            orchestration.save(stickyID, $scope.data).then(function(response) {
                if (!response.data.success) {
                    alert("error saving!");
                    return;
                }
            });
        }
        $scope.save = save;

        function addPad() {
            if (!$scope.data) {
                $scope.data = {};
                $scope.data.stickies = [];
            }
            $scope.data.stickies.push({
                title: 'new sticky',
                list: [{
                    text: 'new item',
                    checked: false
                }]
            });
        }
        $scope.addPad = addPad;

        //begin clock
        var tick = function() {
            $scope.clock = Date.now();
        }
        tick();
        $interval(function() {
            tick();
            $interval(tick, 60000);
        }, 60000 - (Date.now() % 60000));
        //end clock

        $timeout(load, 1)
        $timeout(load, 200)
        $interval(load, 30 * 1000);


    });
})();
