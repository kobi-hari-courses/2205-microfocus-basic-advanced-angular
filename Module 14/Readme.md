## Day 14 -  Redux

### Projects:
|     |     |
| --- | --- |
| [quiz-ngrx]() | Quiz app based on Redux |

### Working with immutable data
* How to define immutable entity?
  * We saw that we can create immutable entities by defining an interface where each property is `readonly`
* How to derive new object from existing one?
  * We saw that we can use several javscript tools to help us
  * Modifying object property using the spread operator (`...`) where we only specifiy the changed property
  
```javascript
newObj = {...oldObj, prop1: newValue}
```

  * Add item to array using the spread operator on arrays, so we create a new array which contains all the elements of the original array, with the new item.

```javascript
newArray = [...oldArray, newValue];
newArray2 = [newValue, ...oldArray];
```

  * Change item in array using either `splice` or `map`
  * Remove item from array using either `splice` or `filter`
* We saw how to create helper functions to make our code more readable.

### Redux and NgRx
* We learned about the core concepts of Redux
    - A **State** that holds the entire data in the application
    - A **Store** that stores the state and responsible to replace it with a new state after each action
    - An **Action** that the view dispatches in order to trigger a new state
    - A **Reducer** that calculates a new state from an existing one and an action, effectively turning out entire application into a state machine
    - A **Selector** that pulls a specific part of the state and serves it as an `Observable`
* We understood that redux belives in Uni-directional flow of data, where the store is the **Single point of truth** and data flows to it, and from it, through different routes
* We saw how to add `@ngrx/store` and `@ngrx/store-devtools` into our application
* We saw how to use the chrome extension for redux and how to configure the devtools to communicate with it
* We saw how to define the state
* We saw how to create a reducer from the initial state
* We saw how to define actions and how to group them under a namespace
* We saw how to define `on` parts in the reducer, that respond to specific actions and calculate the next state
* We saw how to dispatch actions from the components
* We saw how to define a hierarchy of selectors
    - We used `createFeatureSelector` to define the root selector
    - We used `createSelector` to create a selector from other more primitive selectors
* We saw how to use a selector to create observables which we can consume in the components

