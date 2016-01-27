/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/parameters.ts" />

'use strict';

describe('Controller: ParametersCtrl', () => {

  // load the controller's module
  beforeEach(module('ecoSimApp'));

  var ParametersCtrl: tsApp.ParametersCtrl,
    scope: tsApp.IParametersScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    ParametersCtrl = $controller('ParametersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
