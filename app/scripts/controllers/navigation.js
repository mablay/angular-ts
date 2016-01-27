/// <reference path="../app.ts" />
'use strict';
var tsApp;
(function (tsApp) {
    var NavigationCtrl = (function () {
        // @ngInject
        function NavigationCtrl($scope) {
            this.$scope = $scope;
            $scope.menuItems = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            console.debug('[NAV] Init');
        }
        return NavigationCtrl;
    })();
    tsApp.NavigationCtrl = NavigationCtrl;
})(tsApp || (tsApp = {}));
angular.module('tsApp').controller('NavigationCtrl', tsApp.NavigationCtrl);
//# sourceMappingURL=navigation.js.map