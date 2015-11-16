/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/instances.ts" />

'use strict';

describe('Controller: InstancesCtrl', () => {

  // load the controller's module
  beforeEach(module('ecoSimApp'));

  var InstancesCtrl: ecoSimApp.InstancesCtrl,
    scope: ecoSimApp.IInstancesScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    InstancesCtrl = $controller('InstancesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
