(function() {
    'use strict';
    stickiesApp
        .controller('backgroundController', function($scope, orchestration, $window) {
            function loadBackground() {
                orchestration.getBackground().then(function(response) {
                    if (!response.data || !!response.data.error) {
                        alert("error loading background!");
                        return;
                    }
                    var images = response.data.images;
                    console.log(images, images[0].fullURL, Math.random(), images.length, Math.random() * images.length);
                    $scope.backgroundURL = images[Math.floor(Math.random() * images.length)].fullURL;
                    console.log(images[Math.random() * images.length])
                });
            }

            if ($window.location.pathname == "/index.html" || $window.location.pathname == "/stickies/index.html")
                loadBackground();


                $scope.toggleBackgroundOnly = function(){
                  $scope.$parent.bgOnly = ($scope.$parent.bgOnly == 'bg-only' ? '' : 'bg-only')
                }
        });
})();
