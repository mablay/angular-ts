/// <reference path="../app.ts" />

'use strict';

module tsApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {
    // @ngInject
    constructor (private $scope: IMainScope) {

      console.log('[MainCtrl] constructor');

    }
  }
}

angular.module('tsApp')
  .controller('MainCtrl', tsApp.MainCtrl);
