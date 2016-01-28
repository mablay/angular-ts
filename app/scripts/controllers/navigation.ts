/// <reference path="../app.ts" />

import NavigationCtrl = tsApp.NavigationCtrl;
'use strict';

module tsApp {
	export interface INavigationScope extends ng.IScope {
		menuItems: any[];
	}

	export class NavigationCtrl {
    static IID = 'NavigationCtrl';

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

angular.module(tsApp.MODULE_NAME).controller(tsApp.NavigationCtrl.IID, tsApp.NavigationCtrl);

