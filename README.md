# Angularfirstproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


Directives:
============
     Useful for alter the DOM

1.Structural Directives
                'ngFor,ngStyle'

2.Attribute Directives
          ngClass , ngStyle

<!-- PIPES -->
=======
   Useful to alter the DOM format

| uppercase
| lowercase
| date

<!-- Possible API calls -->
========================
1.all                -         get      get(url)
2.specific           -         get      get(URL/id)
3.filtering          -         get      get(url?filter=term)
4.sorting            -         get      get(url?sortBy=column&order=asc/desc)
5.pagination         -         get       get(url?limit=limit&page=page)

6.create             -         post
7.update             -         put
8.delete             -         delete      delete(url/id)




1.Template Driven Forms--->  [(ngModel)]
             -html
             -simple
2.Reactive Forms------->
             -typescript
             -complex

             1.FormGroup
             2.FormControl
             3.Nested FormGroup
             4.Dynamic Forms
             5.Form Array
             6.Validators

