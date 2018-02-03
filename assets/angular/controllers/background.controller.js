(function() {
    'use strict';
    stickiesApp
        .controller('backgroundController', function($scope, orchestration) {
            $scope.backgroundURL = orchestration.getBackground().fullURL;
        });
})();
