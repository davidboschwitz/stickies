(function() {
    'use strict';
    stickiesApp
        .directive('clickEdit', function() {
            return {
                restrict: 'E',
                templateUrl: '/assets/angular/views/clickedit.view.html',
                require: '?ngModel',
                scope:true,
                // scope: {
                //     text: '=',
                //     save: '&'
                // },
                link: function(scope, ngModel){
                  scope.editing = false;
                  console.log(scope);
                  scope.click = function(b){
                    if(!b){
                      scope.save();
                    }
                    scope.editing = b;
                  }

                  if (!ngModel) return;
                  console.log('ngmodel', ngModel);

scope.onChange = function(){
  ngModel.$setViewValue(scope.value);
};

ngModel.$render = function(){
  scope.value = ngModel.$modelValue;
};
                }
            };
        });
})();
