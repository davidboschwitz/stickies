(function() {
    'use strict';
    stickiesApp
        .service('orchestration', function($http, $window) {
            var $ = $window.jQuery;
            let URL_ROOT = '/stickies/backend/';

            return {
                load: function(id) {
                    console.debug(`orchestration.load(${id})`);
                    let promise = new Promise((resolve, reject) => {
                        let URL = URL_ROOT + `get.php?id=${id}`;
                        $http.get(URL)
                            .then(function(response) {
                                    //success
                                    console.debug(response);
                                    resolve(response);
                                },
                                function(response) {
                                    //error callback
                                    console.error(response)
                                    resolve(response);
                                }
                            );
                    });
                    return promise;
                },
                save: function(id, data) {
                    console.debug(`orchestration.save(${id})`);
                    let promise = new Promise((resolve, reject) => {
                        let URL = URL_ROOT + `post.php?id=${id}`;
                        $http({
                                method: 'POST',
                                url: URL,
                                data: $.param({
                                    data: angular.toJson(data)
                                }),
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            })
                            .then(function(response) {
                                    //success
                                    console.debug(response);
                                    resolve(response);
                                },
                                function(response) {
                                    //error callback
                                    console.error(response)
                                    resolve(response);
                                }
                            );
                    });
                    return promise;
                },
                newGUID: function() {
                    return Math.random().toString(36).replace(/[^a-z1-9]+/g, '').substr(0, 5);
                }
            }
        })
})();
