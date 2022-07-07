# Module 12 - Multicast, Publish and Share in Angular

### About the `tap` operator
* Allows side effects
* But as we saw, it is not an alternative to `subscribe` because it is an operator
  * It is a "cold" operator
  * It still depends on subscription to be activated
  * When there are multiple subscriptions, it activates multiple times

### How to warm a cold observable
* We saw that `Subject` may serve both as `Observable` and as `Observer`
* When used as both at the same time, it serves as a hub between its subscribers on one side, and its observables on the other side
* We saw that if we subscribe a subject to a cold observable, the subject becomes a hot version of the source
* So in effect, the subject "heats" the cold observable
* We saw that the `multicast` operator places a subject in front of an observable
* We saw that it returns "connectable observable" where the `connect` method is used to subscribe the subject to the source

### Multicast with factory
* We saw that `multicast` has 2 versions
  * `multicast(Subject)` uses the same subject to re-connect to the source
  * `multicast(() => Subject)` creates a new subject when reconnecting to source.
* We saw that when using a single subject, if it receives `complete` then it no longer listens to the source even if it is reconnected.
* We saw that when using a subject factory, even if the subject received `complete` before, it will use a new subject and therefore still get and pass events on.

### Publish and its variations
* We saw that `publish()` is shortcut for `multicast(() => new Subject())`.
  * When used with `refCount` if source throws `complete` then all new subscribers will receive `complete`
  * But, if subscribers count goes down to 0, new subscribers will receive a new sequnece of `next` events, since a new subject is created for each connection
* `publishBehavior(value)` is shortcut for `multicast(new BehaviorSubject(value))`. So it uses the same subject to reconnect. Meaning that if the subject receives `complete` it will return `complete` to all subscribers, even if it reconnects
* `publishReplay(buffer)` is shortcut for `multicast(() => new ReplaySubject(buffer))` so it uses a **new subject for each reconnection**. Which means that if it has to reconnect, the history will be forgotten, since we switch to a new subject.

### Share and its variations
* `share()` is shortcut for `multicast(() => new Subject) + refCount`
  * It will use a new subject on each connection.
  * Essentially, it is also shortcut for `publish() + refCount`
* `shareReplay` is special for some reasons
  * It uses `ReplaySubject` but does not use `multicast` (!!!)
  * It has 2 different variations of its own, controlled by a `Config` parameter that it receives
  * It has 2 modes: with refcount, or without.
* `shareReplay({refCount: false})` is a little confusing because it **DOES** actually count references, but only in order to decide when to connect. It never disconnects (!!!)
  * Will only use a single subject
  * Will only use a single connection that will never disconnect
  * History is therefore maintained for all future subscribers
  * Perfect for lazy fetch and caching of constant data from a server
  * Is the default, so: `shareReplay(bufferCount, windowTime)` is the same as `shareReplay({refCount: false, bufferCount, windowTime})`
* `shareReplay({refCount:true})` is a little different and it is there for backwards compatibility because up intil version 6.5 this was the only behavior.
  * refCount is done the same as with the operator, so it counts references and disconnects when reference counting reaches 0.
  * If the source completes, then the same subject will remain, which means that future connections will not occur
  * If the source does not complete, and refernce count drops to 0, it will reconnect on the next subscribe, **but with the a new subject**. So history will be removed.


### Caching
* After having inspected all the possible variations, it is clear that `shareReplay(1)` is the best option for caching of constant values:
  * It uses the same subject every time
  * It never disconnects from source and never reconnects - so the source will only ever run once.
  * It caches the result so that any new subscribers will forever get the last result
* The only problem - is that if `shareReplay(1)` is used with infinite sources, then it will never disconnect, which leads to memory leaks. 
* Conclusion: **`shareReplay(1)` is perfect for caching values of finite observables only**. 
* Also - it must be used with constant data because the data will only be fetched once. If you need to refresh the data every once in a while - we need to find a different mechanism for that.

