/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/lodash/lodash.d.ts" />
/// <reference path="models/status-model.ts" />
/// <reference path="models/system-model.ts" />
/// <reference path="services/parameter.ts" />
/// <reference path="services/relation.ts" />
var tsApp;
(function (tsApp) {
    'use strict';
    var App = (function () {
        function App(name) {
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
            this.app.config(function ($stateProvider, $urlRouterProvider) {
                // Default state
                $urlRouterProvider.otherwise('/');
                // States
                $stateProvider.state('public', {
                    abstract: true,
                    views: {
                        "": {
                            templateUrl: "views/layout-public.html"
                        }
                    }
                }).state('public.home', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vc'
                }).state('public.login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login'
                }).state('public.register', {
                    url: '/register',
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl',
                    controllerAs: 'register'
                }).state('private', {
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
                }).state('private.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vc'
                }).state('private.todos', {
                    url: '/todos',
                    templateUrl: 'views/todos.html',
                    controller: 'TodoCtrl',
                    controllerAs: 'todoCtrl'
                });
            });
            this.app.run(function () {
                console.log('[App] running');
            });
        }
        App.prototype.bootstrapWhenReady = function () {
            var _this = this;
            $(document).ready(function () {
                console.log('[' + _this.app.name + '] Bootstraping');
                angular.bootstrap(document, [_this.app.name]);
            });
        };
        return App;
    })();
    tsApp.App = App;
    new tsApp.App('tsApp').bootstrapWhenReady();
})(tsApp || (tsApp = {}));
//# sourceMappingURL=app.js.map