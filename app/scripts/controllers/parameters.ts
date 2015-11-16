/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
  export interface IParametersScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class ParametersCtrl {
    // @ngInject
    constructor (private $scope: IParametersScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('ecoSimApp')
  .controller('ParametersCtrl', ecoSimApp.ParametersCtrl);
