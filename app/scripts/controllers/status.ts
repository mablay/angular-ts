/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
  export interface IStatusScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class StatusCtrl {
    // @ngInject
    constructor (private $scope: IStatusScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('ecoSimApp')
  .controller('StatusCtrl', ecoSimApp.StatusCtrl);
