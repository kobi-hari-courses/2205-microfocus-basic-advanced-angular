## Day 15 -  Angular Content

### Projects:
|     |     |
| --- | --- |
| [fun-with-content](fun-with-content/) | Introduction to Content Projection in Angular |


### About Content Projection
* Angular allows us to create content inside component tags
* We saw upon investigation, that the content does not appear in the visual tree
* We tested it and discovered that it does get created.
  * Components and directives inside the content ew ininitalized
* We saw that the content gets destroyed with the component that owns it
  * The content is created when the owner view gets created
  * The content is destroyed when the owner view destroys it

### View encapsulation in angular
* We inspected view encapsulation, and saw that it is implemented using attributes with unique id values
* We saw that angular randomly chooses an id per component type, and attaches the id as attribute to each element that is a part of the component template
* We saw that CSS encapsulation is achieved by attaching the special id attribute to each one of the css selectors of that component.
* This is yet another way to show us that the content belongs to the creating component, and not the component it was injected into

### The `<ng-content>` element
* Elements can project their content by using the `<ng-content>` tag.
* We saw that the `ng-content` element chooses where to place the content inside their own template
* We saw that if we use multiple `ng-content` elements, the content will not be duplicated, and only one `<ng-content>` will display it.
* We saw that we can split the content between several `ng-content` elements by specifying a selector.
  * The syntax is `<ng-content select="selector">`
  * We can use any valid CSS selector that will be applied within the content itself
  * We saw that `<ng-content>`s with selector are stronger than ones without, so they get to choose first. The "non specific" `ng-content` element get to project only what is left after the specific ones have already selected their content.
* We saw that even if the `<ng-content>` elements get destroyed (by `*ngIf` for example), the content itself does not get destroyed and is reused when a new `<ng-content>` is created

### Component components
* We saw that we can create directives and components that will interact with eachother.
* We demonstrated how to create a directive that will mark a specific part of the content
* We saw that the directive may use dependency injection to get a reference to the parent component that received the content
  * We saw that we can use the `@Optional` decorator to mark the parameter as optional, so that it does not crash if the directive is not used under the parent component
* We saw that we can also create components, with the same selector as the directive, and cause both the component and the directive to be created on the same element
  * We used this technique in order to inject content into an element that the user selects according to the state of the expander

### The `@ContentChild` decorator
* We saw that when we build a compound component, we use dependency injection to travel up the hierarchy and find the parent component
* We saw that we can travel **down** the hierarchy by using the `@ContentChild` decorator.
  * The syntax is `@ContentChild(type) member:type` 
* We saw that the member is not populated during construction time and not even on init
* We can use the `AfterContentInit` lifecycle hook to place logic that will be executed only after the content child is populated.
* We can also use the `@ContentChildren` decorator if we want to find more than one instance of the same thing inside the content



