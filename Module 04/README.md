## Module 3 - Introduction to Angular

### Projects:
|     |     |
| --- | --- |
| [nodepad](notepad/) | An angular application demonstrating more directives and custom components |

## At the end of module 04 we will have:

### More Angular Directives
* We used `class.x` to conditionally add the class `x` according to a boolean value
* We used `style.x` to set a specific style property by binding
* We used them both to implement selection

### Custom components
* We saw how to create a component manually, and then used the generator to create them automatically
* We learned how to define inputs using the `@Input` decorator
* We saw how to populate inputs with values
* We saw how to use data binding to populate inputs
* We saw how to define output events uisng the `@Output` decorator
* We saw how to regiter to the events and respond to them
* We saw how to carry payload in the event, and consume it in the event handler

### lifecycle hooks
* We learned what are lifecycle hooks and how to use them
* We talked about several lifecycle hooks: 
    - `OnInit`
    - `OnDestroy`
    - `AfterViewInit`
    - `OnChanges`
* We saw how to use the `OnChanges` hook to be notified when an input changes
* We saw that we can also use the javascript properties syntax for the same purpose by implementing a `getter` and `setter` for the property
* We saw the `@ViewChild` decorator and that we can use it to access a part of the view in our typescript code. 
  * We saw a **BAD** example of how to change the state of a DOM element using the `@ViewChild` decorator. Later in the advanced course we will see other ways to use the `@ViewChild` decorator, ways that are far more *Best Practice*

### Exercise
* [The Exercise Presentation](https://www.dropbox.com/s/rkhx8ge3lj5um6t/Description.pptx?dl=0)
* [The solutiom video (Hebrew)](https://www.dropbox.com/s/8ybqibl7geul9bm/Solution.mp4?dl=0)
