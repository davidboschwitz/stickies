(function() {
    'use strict';
    stickiesApp
        .service('orchestration', function($http, $window) {
            var jQuery = $window.jQuery;
            let URL_ROOT = 'https://vps.boschwitz.me/stickies/backend/';

            return {
                load: function(id) {
                    console.debug(`orchestration.load(${id})`);
                    let URL = URL_ROOT + `get.php?id=${id}`;

                    let promise = new Promise((resolve, reject) => {
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
                    let URL = URL_ROOT + `post.php?id=${id}`;

                    data['time'] = (new Date()).toJSON();

                    let promise = new Promise((resolve, reject) => {
                        $http({
                                method: 'POST',
                                url: URL,
                                data: jQuery.param({
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
