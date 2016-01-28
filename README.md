# Angular TypeScript Scaffold

Use as template for angular apps written in TypeScript, since the original scaffold is outdated.

## Global Requirements

* [bower](https://github.com/bower/bower) Package manager for the browser
* [TypeScript](https://github.com/typings/typings) JavaScript meta language
* [typings](https://github.com/typings/typings) TypeScript definition manager
* [GruntJS](https://github.com/gruntjs/grunt) Task runner for the build chain

    npm install -g bower grunt grunt-cli typescript typings tsc

## Setup

    git clone git@github.com:pisquared/angular-ts.git
    cd angular-ts

    npm install
    bower install
    typings install

## Further Scaffolding

I recommend [Yeoman](http://yeoman.io/) with [generator-angular-typescript](https://github.com/onshape/generator-angular-typescript)

    npm install -g yo generator-angular-typescript

Example usage

    yo angular-typescript:route myroute --typescript
