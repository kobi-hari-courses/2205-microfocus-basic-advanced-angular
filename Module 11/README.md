# Module 11 - Combinators and Aggregators in rxjs

### Inflators
* Some operators change a flat observable into a second order observable: an observable of other wrappers.
* The following is a list of second order observables:
  * `Observable<Observable<T>>`
  * `Observable<Array<T>>`
  * `Observable<Promise<T>>`
* We have seen the `bufferCount` operator that grops sequential values into `T[]` thus converting an observable into observable of arrays
* We saw that `windowCount` does the same but converts them into `Observable<Observable<T>>`
* We saw that both of them allow **overlapping windows** by using the second parameters
* We saw a special example `bufferCount(2, 1)` converts an observable of values into observable of `[current, previous]` 
  * can be used to get notifications of relative change
### Combinators
* As a reminder, there are 3 groups of operators
  * Factories: standalone functions that create observable out of nothing
  * Pipeable: operators that take a single input stream and produce a single output stream, and are therefore chanable (pipeable). called using the `pipe` method
  * Combinators: standalone functions that take multiple input streams and unite them into a single output stream
* Some examples of combinators:
  * [`merge`](https://rxjs.dev/api/operators/merge)
  * [`concat`](https://rxjs.dev/api/index/function/concat)
  * [`race`](https://rxjs.dev/api/index/function/race)
* We also saw the `combineLatest` combinator, which for each event of any of its sources, produces a tuple with the latest value of each source.
* We saw the `withLatestFrom` operator, which is a variation on `combineLatest` but it is a pipeable operator, since it takes one main input stream along with additional extra streams. It does not treat them simmetrically, which is why it is considered a pipeable operator
  * [`combineLatest`](https://rxjs.dev/api/index/function/combineLatest)
  * [`withLatestFrom`](https://rxjs.dev/api/operators/withLatestFrom)

* We saw an example that mixes 2 values supplied by the user (word, and manipulation funtion) reactively
  * The user selections are pushed into behavior subjects
  * The subjects are mixed into one observable using `combineLatest` + `map`


### Aggregators
* We defined aggreagator as an operator that aggregates the values of an observable
* We saw that arrays in javascript have aggregators as well
  * In Javascript it is called `reduce`
* We saw that the method takes a seed value - to start with, and then call a reducer function on the latest aggregated value and the new item
  * `array.reduce((i, j) => i + j, 0)` === the sum of the array
  * `array.reduce((i, j) => i * j, 1)` === the product of the array
  * `array.reduce((i, j) => max(i, j), -inifinity)` === the largest item in the array
  * `array.reduce((i, j) => i + 1, 0))` === the number of items in the array
* Sometime we want to accumulate a different type of values then the actual values in the array:
  * `array.reduce(([sum, count], item) => [sum+item, count + 1], [0, 0])` === a tuple containing both the sum and the count of the array
* Sometime we also like to apply a transformation on the final accumlated value
  * For example, the following code calculates the avarage of the array:
```js
array.reduce(([sum, count], item) => [sum+item, count + 1], 
[0, 0], 
([sum, count]) => sum / count);
```

* In RxJs we can use operators with the same names as aggregators. 
  * In Javascript: `reduce`
* So calling `reduce((i, j) => i + j, 0)` on 
  * `---- 1 ----- 2 ----- 3 ----- 4 -----|`
  * produces:
  * `-----------------------------------10|`
* An additional aggregator is the `scan` operator. It works the same way as `reduce` but it produces sub totals instead of the grand total.
* So calling `scan((i, j) => i + j, 0)` on 
  * `---- 1 ----- 2 ----- 3 ----- 4 -----|`
  * produces:
  * `---- 1 ----- 3 ----- 6 ----- 10-----|`
* We saw how to use `scan` in order to create a state machine
  * The result observable yields the current state
  * Each state is a result of the previous state mixed with a new value arriving from the source observable
* We saw how we can use `scan` to create an observable of the **current position** of a robot, from an observable of the steps it takes and their direction.





