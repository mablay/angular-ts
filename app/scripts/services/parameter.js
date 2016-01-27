/// <reference path="../app.ts" />
'use strict';
var ecoSimApp;
(function (ecoSimApp) {
    var Parameter = (function () {
        function Parameter(name) {
            this.id = _.camelCase(name) + '_' + Date.now();
            this.name = name;
            this.description = "";
            this.min = 0;
            this.max = 100;
        }
        return Parameter;
    })();
    ecoSimApp.Parameter = Parameter;
})(ecoSimApp || (ecoSimApp = {}));
angular.module('ecoSimApp').service('Parameter', ecoSimApp.Parameter);
//# sourceMappingURL=parameter.js.map