/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/status.ts" />

'use strict';

describe('Controller: StatusCtrl', () => {

  // load the controller's module
  beforeEach(module('ecoSimApp'));

  var StatusCtrl: tsApp.StatusCtrl,
    scope: tsApp.IStatusScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    StatusCtrl = $controller('StatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
