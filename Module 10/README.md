## Module 10 - Directives, and HTTP

### Projects:
|     |     |
| --- | --- |
| [fun-with-directives](./fun-with-directives/) | Introduction to Element Directives |
| [movies-server](./movies-server/) | Example of using `json-server` for mock server |
| [fun-with-http](./fun-with-http/) | Example of using `HttpClient` for http access from angular apps |

### Introcution to Element Directives
* We talked about what is a directive and how it works internaly
* We talked about `ElementRef` and how to pass it to the directive and use it to change the properties of the host
* We talked about the Renderer and why it is needed
* We talked about how to use `HostBinding` to affect the host properties
* We talked about `HostListerner` and how to use it to register to host events
* We talked about how to pass event data to `HostListener` functions
* We talked about how to pass inputs to the directives
* We saw how to define events as output of directives
* We talked about how to use the shortcut syntax for inputs that have the same name as the directive
* We talked about the `selector` property and the fact that we can use any CSS selector to select the directive
* We saw how to use `exportAs` to expose the directive the the using template so it can bind to its properties

### Introduction to Http in Angular
* We talked about the structure of Http Request - Verb, URL, Header, Body
* We used `HttpClientModule` to provide our services with the `HttpClient` service
* We used the `HttpClient` Service to create web requests to an online service
* We saw that the `HttpClient` methods all return Observables
* We saw that it is preferable to use the `toPromise` operator, to convert the observable to promise.
* We understood that toPromise is about to be depricated and replaced with: 
    - firstValueFrom
    - lastValueFrom
* We saw how to create development server using the `json-server` tool