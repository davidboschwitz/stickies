(function() {
    'use strict';
    stickiesApp
        .controller('indexController', function($scope, $window, $http) {
            var $ = $window.jQuery;

            // $http.get('/backend/get.php?id=').then(function(res) {
            //     console.log(res)
            //     $scope.data = res.data;
            //     if (!!$scope.data[$route.current.params.blogID]) {
            //         $scope.blog = $scope.data[$route.current.params.blogID];
            //         $scope.blog.content = $sce.trustAsHtml($scope.blog.content);
            //     }
            // });
            //scope.stickies = ;

            // function save() {
            //     console.debug('save()');
            //     $http.post('/backend/post.php?id=' + id, {
            //             data: $scope.stickies
            //         })
            //         .then(function(response) {
            //             console.debug(response);
            //         });
            // }
            // $scope.save = save;
            //
            // function load() {
            //     console.debug('load()')
            //     $http.get('/backend/get.php?id=' + id)
            //         .then(function(res) {
            //             console.debug(response);
            //             //     console.log(res)
            //             //     $scope.data = res.data;
            //             //     if (!!$scope.data[$route.current.params.blogID]) {
            //             //         $scope.blog = $scope.data[$route.current.params.blogID];
            //             //         $scope.blog.content = $sce.trustAsHtml($scope.blog.content);
            //             //     }
            //         });
            // }

        });
})();
