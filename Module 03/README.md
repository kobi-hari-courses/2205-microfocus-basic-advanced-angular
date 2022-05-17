## Module 3 - Introduction to Angular

### Projects:
|     |     |
| --- | --- |
| [hello-angular](hello-angular/) | Introduction to Angular |
| [nodepad](notepad/) | An angular application demonstrating more directives and custom components |


### Angular from way above
* We talked again about SPA and the role of client application, UI Server and Data Server
* We explained that angular development is done in a nodeJS environment but the code is compiled to a javascript that runs in the browser
* We talked about how an angular application is served:
    - You write your code in many files
    - The files go through compilation
    - The compiled files are then packed into single `main.js` file
    - The UI Server serves an empty `index.html`
    - The html file links to the main.js which then runs in the browser

### The angular CLI
* Helps us to create new angular projects with many many files
* Helps us to generate angular "items" with initial template
* Helps us to automagically compile and pack our code - **ALL THE TIME**
* Helps us by bringing up a development web server that serves the application to the browser in 'localhost:4200'
* Can also help us to automatically test the code and build it for production
* Is installed using npm

### An angular app structure
* We have created an app using the cli
* We run it using `ng serve` and the browsing the `localhost:4200`
* We went through the configuration files
* We saw how index.html is an empty html file that links to the compiled script
* We inspected `main.ts` and saw that it "bootstraps" a main module called `AppModule`
* We understood that an angular module is a `package of angular items`
* We saw the `AppModule` is just a class with `ngModule` decorator, which turns it into a module
* We saw that `AppComponent` is a class with `Component` decorator, which turns it into an angular component
* We saw that an angular component is a new "Html Tag" with its own looks and behavior
    - The behavior is written in typescript 
    - The looks are defined in html and CSS

### MVVM
* We understood the evolution that lead to the `Model View View-Model` paradigm
* We learned the role of each part of the pattern
* We understood that a component is a pair of view and view model
* We saw how to create an angular application while thinking "mvvm"
* We wrote a simple search application
* We learned about the concept of **Directive** and understood that there are 2 types of them
    - Element directive - is put on an element and changes its behavior
    - Structural directive - is put on an element and can modify the structure of the HTML DOM
* We were introduced to the directives:
    - `*ngIf`
    - `*ngFor`
    - disabled
* We learned how to wire interactivity using angular events
    - for example `(click) = "doSomething()"`
* We learned about the concept of data binding and saw that there are 4 types of bindings
    - `{{value}}` - Text interpolation. For element content only
    - `[directive]="value"` - input binding - for directives and inputs
    - `(event)="action"` - event binding - for events
    - `*directive="whatever"` - for structural directive, each with its own syntax

### Modern CSS
* We showed why sometime its important to be able to set the size of an element, including the border and padding, 
* We showed that the `box-sizing` property takes care of that
* We introduced modern display values `grid` and `flex` which activate modern, more "ui friendly" layouts
* We saw that there are various "games" that help us to learn these technologies:
    - [Grid Garden](https://cssgridgarden.com/)
    - [Flex Froggy](https://flexboxfroggy.com/)
* We can also deep dive into these technologies from the excellent articles:
    - [The complete guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - [The complete guide to Flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

