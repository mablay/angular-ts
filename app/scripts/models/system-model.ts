/// <reference path="../app.ts" />

module ecoSimApp {
	'use strict';

	export interface SystemMap {
		[key: string]: System
	}

	export class System {

		id: string;
		name: string;
		description: string;
		parameters: IParameterMap;
		relations: any;
		initialState: IStatusMap;

		constructor() {}

	}
}
