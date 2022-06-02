## Module 7 - RxJS Deep Dive

### Projects:
|     |     |
| --- | --- |
| [fully-reactive-app](fully-reactive-app/) | Using RxJs with angular services |
| [fun-with-operators]() | Introduction to RxJs Operators |

### RxJS in Angular Services
* We learned how to develop stateful services using `BehaviorSubject` and expose it as an observable using the `.asObservable()` method
* We understood that if we subscribe to an observable we must also unsubscribe from it when we are done with it to avoid memory leaks
* We saw that we can bind directly to an observable using the `async pipe` in the html
* We learned the term **Fully Reactive Application** as one where we pass observables all the way from the services to the html templates
* We saw how to configure manual change detection for components and understood that it can dramatically improve performance

### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 4 documentation web sites that serve as reference guide for reactive operators
    * [ReactiveX docs](http://reactivex.io/)
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [Rx Marble Visualizer](https://rxviz.com/)
* We covered some simple operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [interval](https://rxjs-dev.firebaseapp.com/api/index/function/interval)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
    * [takeLast](https://rxjs-dev.firebaseapp.com/api/operators/takeLast)
    * [mapTo](https://rxjs-dev.firebaseapp.com/api/operators/mapTo)
    * [merge](https://rxjs-dev.firebaseapp.com/api/index/function/merge)
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We Understood that the `map` operator cannot be used when we apply an asyncronous function on each event because it creates an Observable of Promises
* We saw how to use `mergeMap` and `switchMap` as asynchronous alternative for map when using async projections
    - `mergeMap(x => observable)` is actually short for `map(x => observable), mergeAll()`
    - `switchMap(x => observable)` is actually short for `map(x => observable), switchAll()`
* We understood the difference between [mergeMap](https://rxjs-dev.firebaseapp.com/api/operators/mergeMap) and [switchMap](https://rxjs-dev.firebaseapp.com/api/operators/switchMap)
