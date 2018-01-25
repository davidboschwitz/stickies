(function() {
    'use strict';
    stickiesApp
        .config(function($routeProvider) {
            $routeProvider.when("/home", {
                controller: "homeController",
                templateUrl: "assets/angular/views/home.view.html",
                title: "Stickies"
            });

            $routeProvider.when("/sticky/:stickyID", {
                controller: "stickyController",
                templateUrl: "assets/angular/views/sticky.view.html",
                title: "Stickies"
            });

            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        })
})()
