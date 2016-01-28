/// <reference path="../../typings/browser.d.ts" />


/// <reference path="controllers/main.ts" />
/// <reference path="services/todo.ts" />


// Workaround: lodash currently causes problems with typescript
declare var _;

module tsApp {
  'use strict';


  // *** MODULE NAME ***
  // This name will be used  as the angular module name
  // throughout the App and its controllers, services, etc.
  export var MODULE_NAME = 'tsApp';

  export class App {

    app: ng.IModule;

    constructor() {
      console.log('[Constructor] name: %o', tsApp.MODULE_NAME);

      this.app = angular.module(MODULE_NAME, [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngStorage'
      ]);

      // @ngInject
      this.app.config(function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        // Default state
        $urlRouterProvider.otherwise('/');

        // States
        $stateProvider
          .state('public', {
            abstract: true,
            views: {
              "": {
                templateUrl: "views/layout-public.html"
              }
            }
          })
          .state('public.home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: tsApp.MainCtrl.IID,
            controllerAs: 'vc'
          })
          .state('public.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl'
          })
          .state('public.register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'register'
          })
          .state('private', {
            abstract: true,
            views: {
              "": {
                templateUrl: "views/layout-private.html"
              },
              "nav@private": {
                templateUrl: 'views/navbar.html',
                controller: 'NavigationCtrl',
                controllerAs: 'nav'
              }
            }
          })
          .state('private.home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vc'
          })
          .state('private.todos', {
            url: '/todos',
            templateUrl: 'views/todos.html',
            controller: 'TodoCtrl',
              controllerAs: 'todoCtrl'
          });

      });

      this.app.run(function(){
        console.log('[App] running');
      });

    }


    public bootstrapWhenReady() {
      $(document).ready(() => {
        console.log('[' + this.app.name + '] Bootstraping');
        angular.bootstrap(document, [this.app.name]);
      });
    }

  }



  new tsApp.App().bootstrapWhenReady();

}
