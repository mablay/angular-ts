/// <reference path="../app.ts" />

'use strict';

module tsApp {

    export class TodoCtrl {
      static IID = 'TodoCtrl';

    // @ngInject
    constructor () {

    }
  }
}

angular.module(tsApp.MODULE_NAME).controller(tsApp.TodoCtrl.IID, tsApp.TodoCtrl);
