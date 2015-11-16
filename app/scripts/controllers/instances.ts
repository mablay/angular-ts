/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
  export interface IInstancesScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class InstancesCtrl {
    // @ngInject
    constructor (private $scope: IInstancesScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('ecoSimApp')
  .controller('InstancesCtrl', ecoSimApp.InstancesCtrl);
