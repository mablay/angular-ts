/// <reference path="../app.ts" />

import LoginCtrl = tsApp.LoginCtrl;
'use strict';

module tsApp {

  export class LoginCtrl {
    //static IID = 'LoginCtrl';

    // @ngInject
    constructor () {
      console.log('[Login] constructor');
    }

    login(username:string, password:string) {
      console.log('[Login] User attempts login %s:%s', username, password);
    }
  }
}

angular.module('tsApp').controller('LoginCtrl', tsApp.LoginCtrl);
