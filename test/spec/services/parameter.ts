/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/parameter.ts" />

'use strict';

describe('Service: Parameter', () => {

  // load the service's module
  beforeEach(module('ecoSimApp'));

  // instantiate service
  var Parameter;
  beforeEach(inject(_Parameter_ => {
    Parameter = _Parameter_;
  }));

  it('should do something', () => {
    expect(!!Parameter).toBe(true);
  });

});
