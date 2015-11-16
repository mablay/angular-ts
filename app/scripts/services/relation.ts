/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {

	export interface RelationMap {
		[key: string]: Relation
	}

	export class Relation {

		id: string;
		name: string;
		description: string;
		domainId: string;
		codomainId: string;
		type: string;
		configuration: Array<number>[];

		constructor(name) {
			this.id = _.camelCase(name) + '_' + Date.now();
			this.name = name;
			this.description = "";
			this.type = 'step';
			this.configuration = [];
		}

		influence(system: System, status: IStatusMap): number {
			if (this.configuration.length === 0) { return 0; }

			var domain = system.parameters[this.domainId];
			var codomain = system.parameters[this.codomainId];
			var argument: number = status[this.domainId] || 0;
			argument = (argument > domain.min) ? argument : domain.min;
			argument = (argument < domain.max) ? argument : domain.max;
			// ...

			// Random jitter of 10% in the codomain
			var range = codomain.max - codomain.min;
			var x = (2 * Math.random() - 1) * range * 0.1;
			//			x = (x > codomain.min) ? x : codomain.min;
			//			x = (x < codomain.max) ? x : codomain.max;
			return x;
		}

	}
}

angular.module('ecoSimApp')
  .service('Relation', ecoSimApp.Relation);
