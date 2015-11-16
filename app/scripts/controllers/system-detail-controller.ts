/// <reference path="../app.ts" />

'use strict';

module ecoSimApp {

  export class SystemDetailCtrl {

    storage: any;
    system: System;

    // @ngInject
    constructor($localStorage, $stateParams) {
      this.storage = $localStorage;

      if ($stateParams.id) {
        var id = $stateParams.id;
        this.system = this.getSystem(id);
        console.debug('[sysCtrl] Systems loaded %o', this.system);
      }
    }

    uiUpdateDescription() {
      console.debug('[SysDetail] Update description %o', this.system.description);
      this.storage.systems[this.system.id].description = this.system.description;
    }

    uiAddParameter(name:string):void {
      var parameter = new Parameter(name);
      console.debug('[SysDetail] Add parameter %o to system %o', parameter, this.system);
      this.storage.systems[this.system.id].parameters[parameter.id] = parameter;
    }

    uiAddRelation(name: string): void {
    var relation = new Relation(name);
    console.debug('[SysDetail] Add relation %o to system %o', relation, this.system);
    this.storage.systems[this.system.id].relations[relation.id] = relation;
    }

    getSystem(id:string): System {
      return this.storage.systems[id];
    }



  }
}

angular.module('ecoSimApp')
  .controller('SystemDetailCtrl', ecoSimApp.SystemDetailCtrl);
