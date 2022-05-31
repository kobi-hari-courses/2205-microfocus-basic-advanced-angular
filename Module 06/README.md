## Module 6 - Promises and Intro to RxJs

### Projects:
|     |     |
| --- | --- |
| [fun-with-promises](fun-with-promises/) | Introduction to Promises in Javascript |
| [fun-with-rxjs](fun-with-rxjs/) | Introduction to Reactive Extensions to Javascript |

### Promises - Continued
* We understood what `async` and `await` keywords do and how do they affect the compilation
* We understood that the `.then` method, and the `async` keywords, also create promises, out of other promises
* We understood what operators are and that we have 3 categories of operators:
  * Factories - create promises out of nothing
  * Pipeables - create promise out of one promise, and therefore chainable
  * Combinators - create promise out of collection of promises
* We saw how to use `Promise.resolve` and `Promise.reject` as factories to create promises that are already completed.
* We saw how to use `Promise.all` and `Promise.race` to group promises together and wrap them in a single promise that returns all the results from all the promises or from the first one to complete.
* Finally we understood how the `Promise` constructor works
  * We saw that we provide it with a callback that is executed instantly
  * We saw that the Promise constroctor passes to our callbacks 2 functions that can be used to complete the promises, either succesfully with a result or unsuccesfully with an error
  * We saw an example of storing the `resolve` callback and then calling it later when the user clicks a button


### Introduction to RxJS
* We understood the meaning of a `Stream`
* We defined what an `Observer<T>` is and understood that it has 3 methods
    * `next(T)`
    * `complete()`
    * `error(err)`
* We understood that `Observable<T>` is an object that allows observers to subscribe
    * `subscribe(Observer<T>)`
* We saw how to define an observer explicitly by supplying the 3 methods and their implementation
* We saw how to create an observable using the `interval` operator
* We saw that 2 observers that subscribe on different times, get different sets of events that are not synchronized
* We understoof the difference between **cold** observables and **hot** observables
* We have seen a few other factory operators:
  * `timer` - creates an observable with time delay. It has two variations
    * `timer(----)`=>  ----0|
    * `timer(----, --)` => ----0--1--2--3--4...
  * `of` - wraps a value or values inside a synchronous observable
    * `of(42)` => (42)|
    * `of(1, 2, 3)` => 123|
  * `from` - serves as a multifunction converter between any wrapper to observable
    * `from([1, 2, 3])` => [1, 2, 3]|
    * `from(Promise ----42|)` => ----42|
* We saw how to create a custom observable using the observable constructor
* We got familiar with the `Subject` object and understood that it is a hot observable
* We learned about `BehaviorSubject` and understood that it is just a subject that sends the latest event to a new observer on the moment of subscription
