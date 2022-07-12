# Module 13 - Advanced topics in Angulars Dependency Injection

### Projects:
|     |     |
| --- | --- |
| [fun-with-more-di](./fun-with-more-di/) | Advanced Topics in Angulars Dependency Injection |

## Injection Token
* We understood that the type of the requested injection does not always accurately describe the intent of the required object. Sometime the type can be something like "string" or "number" and you to further describe the requested item
* **Injection Tokens** Allow us to define something that needs to be injected, regardless of its type
  * We create an injection token by exporting a constant of type `InjectionToken<T>` where `T` is the data type.
  * We provide it by using the injection token in the `provide` property of the provider object.
  * We consume it using the `@Inject(token)` decorator
  * We can also mark it as optional using the `@Optional()` decorator

## Provider types
* We have already seen the `useClass` and `useExisting` providers in [Module 05](../Module%2005/README.md)
* We saw how to privde an exact value using the `useValue` provider.
* We saw how to use the `useValue` provider to provide a token of type function, so that the function can later be called lazily.
* We saw how to use the `useFactory` provider, to calculate the value using a method that is called when the value is first needed to be provided.
* We saw how to use the `useFactory` provider, to provide a value of type function (a function that returns a function).
* We saw that the `useFactory` provider may also receive injectable prameters
  * These are set using the `deps` property of the provider.
  * In the `deps` property, we list the tokens that can be used to populate each parameter
  * We saw that we can use `closure` to create a function value, that uses on of these parameters.


## Multi provider
* We saw that we can define a token of type array, and then provide each item seperately.
* We saw that when several modules provide the same token, only one provider takes effect.
* But, when we use the `multi:true` settings, the various providers are accumulated, and all the values are injected.


## App initialization using Dependency injection
* We saw the `APP_INITIALIZER` token, which is of type function, that either returns `void`, `Promise<void` or `Observable<void>`. 
* We saw that the actualy type that angular expects is an array of initialization methods.
* We saw that each module may supply several initializers using the `multi` settings.
* We saw that in order to initalize a service, we need to:
  * use the `useFactory` provider
  * supply the service as parameter using the `deps` property
  * return a function object that calls the init method
  * notice that we take advantage of the closure feature.
* We saw that angular will then await the returned promises and will start rendering the application only once the initializers are all complete.