/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
  export interface IRelationsScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class RelationsCtrl {
    // @ngInject
    constructor (private $scope: IRelationsScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('ecoSimApp')
  .controller('RelationsCtrl', ecoSimApp.RelationsCtrl);
