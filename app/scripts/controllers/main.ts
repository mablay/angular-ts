/// <reference path="../app.ts" />

import MainCtrl = tsApp.MainCtrl;
'use strict';

module tsApp {

  export class MainCtrl {
    static IID = 'MainCtrl';

    // @ngInject
    constructor () {


      console.log('[MainCtrl] constructor ');

    }
  }
}

angular.module(tsApp.MODULE_NAME)
  .controller(tsApp.MainCtrl.IID, tsApp.MainCtrl);
