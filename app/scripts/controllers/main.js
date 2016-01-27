/// <reference path="../app.ts" />
'use strict';
var tsApp;
(function (tsApp) {
    var MainCtrl = (function () {
        // @ngInject
        function MainCtrl($scope) {
            this.$scope = $scope;
            console.log('[MainCtrl] constructor');
        }
        return MainCtrl;
    })();
    tsApp.MainCtrl = MainCtrl;
})(tsApp || (tsApp = {}));
angular.module('tsApp').controller('MainCtrl', tsApp.MainCtrl);
//# sourceMappingURL=main.js.map