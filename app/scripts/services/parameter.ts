/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {
	export interface IParameterMap {
		[index: string]: Parameter
	}

	export class Parameter {

		id: string;
		name: string;
		description: string;
		min: number;
		max: number;

		constructor(name: string) {
			this.id = _.camelCase(name) + '_' + Date.now();
			this.name = name;
			this.description = "";
			this.min = 0;
			this.max = 100;
		}

	}
}

angular.module('ecoSimApp')
  .service('Parameter', ecoSimApp.Parameter);
