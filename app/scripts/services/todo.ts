/// <reference path="../app.ts" />

'use strict';

module tsApp {

  export class Todo {
    static IID = 'Todo';

		id: string;
    done: boolean;

		constructor(public title: string) {
			this.id = _.camelCase(name) + '_' + Date.now();
			this.done = false;
		}

	}
}

angular.module(tsApp.MODULE_NAME).service(tsApp.Todo.IID, tsApp.Todo);
