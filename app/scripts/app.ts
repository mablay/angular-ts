/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/lodash/lodash.d.ts" />
/// <reference path="models/status-model.ts" />
/// <reference path="models/system-model.ts" />
/// <reference path="services/parameter.ts" />
/// <reference path="services/relation.ts" />


module ecoSimApp {
  'use strict';

  declare var woodman: any;

  export var log: any;

  export class EcoSim {

    app: ng.IModule;

    constructor(name: string) {
      this.app = angular.module(name, [
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
              },
              "nav@public": {
                templateUrl: 'views/navbar.html',
                controller: 'NavigationCtrl'
              }
            }
          })
          .state('public.main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .state('public.systems', {
            url: '/systems',
            templateUrl: 'views/systems.html',
            controller: 'SystemsCtrl',
            controllerAs: 'sysCtrl'
          })
          .state('public.system', {
            url: '/system/:id',
            templateUrl: 'views/system-detail.html',
            controller: 'SystemDetailCtrl',
            controllerAs: 'sysCtrl'
          })
          .state('public.parameters', {
            url: '/parameters',
            templateUrl: 'views/parameters.html',
            controller: 'ParametersCtrl'
          })
          .state('public.relations', {
            url: '/relations',
            templateUrl: 'views/relations.html',
            controller: 'RelationsCtrl'
          });

      });
      
      this.app.run(function(){
        // Using Woodman                            // Using the console
        woodman.load('console');
        log = woodman.getLogger('myapp');
        log.log('Hello Woodman');
      });

    }


    public bootstrapWhenReady() {
      $(document).ready(() => {
        console.log('[' + this.app.name + '] Bootstraping');
        angular.bootstrap(document, [this.app.name]);
      });
    }

  }



  new ecoSimApp.EcoSim('ecoSimApp').bootstrapWhenReady();

}
