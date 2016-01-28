/// <reference path="../app.ts" />

import MainCtrl = tsApp.MainCtrl;
'use strict';

module tsApp {
  export interface IMainScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainCtrl {
    static IID = 'MainCtrl';

    // @ngInject
    constructor (private $scope: IMainScope) {

      console.log('[MainCtrl] constructor');

    }
  }
}

angular.module(tsApp.MODULE_NAME)
  .controller(tsApp.MainCtrl.IID, tsApp.MainCtrl);
