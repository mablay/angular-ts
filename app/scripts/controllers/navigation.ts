/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
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

angular.module('ecoSimApp')
	.controller('NavigationCtrl', ecoSimApp.NavigationCtrl);

