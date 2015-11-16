/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {

  export class SystemsCtrl {

    storage: any;
    systems: SystemMap;
    currentSystem: string;

    // @ngInject
    constructor($localStorage) {
      $localStorage.systems = $localStorage.systems || {};
      this.storage = $localStorage;
      this.systems = this.getSystems();
      console.debug('[sysCtrl] Systems loaded %o', this.systems);
    }

    uiAddSystem(name) {
      var id = this.createSystem(name);
      console.debug('[sysCtrl] Add %s => [%s]', name, id);
    }

    getSystems(): SystemMap {
      return this.storage.systems;
    }

    createSystem(name:string):string {
    var id = _.uniqueId(_.camelCase(name) + '_');
      this.storage.systems[id] = {
        id: id,
        name: name,
        description: '',
        parameters: {},
        relations: {},
        initialState: {}
      };
      return id;
    }

    deleteSystem(id:string):void {
      delete this.storage.systems[id];
    }

  }
}

angular.module('ecoSimApp')
.controller('SystemsCtrl', ecoSimApp.SystemsCtrl);
