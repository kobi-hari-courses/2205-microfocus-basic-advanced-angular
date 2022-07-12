import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A_TOKEN, CURRENT_DATE, CURRENT_DATE_AS_STRING, DATA_BASE_URL, GET_PEOPLE_URL, RANDOM_VALUE, RANDOM_VALUE_GENERATOR } from './injection-tokens';
import { Credentials } from './models/credentials';
import { RandomPresentersComponent } from './components/random-presenters/random-presenters.component';
import { APresenterComponent } from './components/a-presenter/a-presenter.component';
import { SharedModule } from './shared/shared.module';
import { YetAnotherSharedModule } from './yet-another-shared/yet-another-shared.module';
import { LazyServicesConsumerComponent } from './components/lazy-services-consumer/lazy-services-consumer.component';
import { Lazy1Service } from './services/lazy-1.service';
import { Lazy2Service } from './services/lazy-2.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomPresentersComponent,
    APresenterComponent,
    LazyServicesConsumerComponent
  ],
  imports: [
    BrowserModule, 
    SharedModule, 
    YetAnotherSharedModule,
  ],
  providers: [
    {
      provide: DATA_BASE_URL, 
      useValue: 'http:ourserver.com:3345'
    }, 
    {
      provide: Credentials,
      useValue: new Credentials('bla bla', 'blu blu')
    }, 
    {
      provide: RANDOM_VALUE, 
      useFactory: () => {
        console.log('The factory for random number is now executing');
        return Math.ceil(Math.random() * 100)
      }
    }, 
    {
      provide: GET_PEOPLE_URL, 
      useFactory: (baseUrl: string) => baseUrl + '/people', 
      deps: [DATA_BASE_URL]
    },
    {
      provide: RANDOM_VALUE_GENERATOR, 
      useFactory: () => (() => Math.ceil(Math.random() * 1000))
    }, 
    {
      provide: CURRENT_DATE, 
      useFactory: () => Date.now()
    }, 
    {
      provide: CURRENT_DATE_AS_STRING, 
      useFactory: (currentDate: number) => (() => new Date(currentDate).toDateString()), 
      deps: [CURRENT_DATE]
    }, 
    {
      provide: A_TOKEN, 
      useValue: 3, 
      multi: true
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (lazy: Lazy1Service) => (() => lazy.init()),
      deps: [Lazy1Service], 
      multi: true
    }, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (lazy: Lazy2Service) => (() => lazy.init()),
      deps: [Lazy2Service], 
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
