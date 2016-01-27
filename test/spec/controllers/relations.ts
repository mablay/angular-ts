/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/relations.ts" />

'use strict';

describe('Controller: RelationsCtrl', () => {

  // load the controller's module
  beforeEach(module('ecoSimApp'));

  var RelationsCtrl: tsApp.RelationsCtrl,
    scope: tsApp.IRelationsScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    RelationsCtrl = $controller('RelationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
