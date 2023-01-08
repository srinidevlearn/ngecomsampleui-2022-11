# Ecom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Scope of the class

- basic routing
- lazyload routing
- some cli commands
  ```

    ng g m <module-name> - for generating ngmodules

    ng g c <component-name> - for generating components

    ng g p <pipe-name> - for generating pipes

    ng g s <service-name> - for generating services

    ng g d <directive-name> for generating directives

  ```

  - angular forms has two types
  - template driven forms
  - reactive forms (most prefered)
        - dynamic forms
- directives
  - structural directives - it will help us to change the DOM structure
      - *ngIf,*ngSwitchCase(least used),*ngFor
  - attribute directives - it will extend the behaviour of DOM.
      - [ngClass],[ngStyle]

- pipes are used to transform data on html