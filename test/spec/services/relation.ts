/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/relation.ts" />

'use strict';

describe('Service: Relation', () => {

  // load the service's module
  beforeEach(module('ecoSimApp'));

  // instantiate service
  var Relation;
  beforeEach(inject(_Relation_ => {
    Relation = _Relation_;
  }));

  it('should do something', () => {
    expect(!!Relation).toBe(true);
  });

});
