/// <reference path="../app.ts" />

'use strict';

module tsApp {
	export interface INavigationScope extends ng.IScope {
		menuItems: any[];
	}

	export class NavigationCtrl {
		// @ngInject
		constructor(private $scope: INavigationScope) {
			$scope.menuItems = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];

			console.debug('[NAV] Init');

		}
	}
}

angular.module('tsApp')
	.controller('NavigationCtrl', tsApp.NavigationCtrl);

