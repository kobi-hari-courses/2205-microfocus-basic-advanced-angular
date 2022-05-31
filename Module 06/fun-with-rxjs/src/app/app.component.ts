import { Component } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, Observer, of, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`observer ${id} next ${val}`), 
      error: err => console.log(`observer ${id} error ${err}`), 
      complete: () => console.log(`observer ${id} completed`)
    };
  }

  createIntervalObsdervable(): Observable<number> {
    return interval(1000);
  }

  createTimerObservable(): Observable<number> {
    return timer(2000);
  }

  createInfiniteTimerObsrevable(): Observable<number> {
    return timer(3000, 1000);
  }

  createOfObservable(): Observable<number> {
    return of(42, 55, 60);
  }

  createFromObservable(): Observable<number> {
    // array [1, 2, 3] => ---1---2--3--|
    // Promise ---42| => ----42|

    return from([1, 2, 3]);
  }

  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 2000);
      setTimeout(() => observer.next(200), 4000);
      setTimeout(() => observer.next(250), 7000);
      setTimeout(() => observer.complete(), 10000);

    });
  }

  createCustomSubject(): Observable<number> {
    const res = new Subject<number>();

    res.next(42);
    setTimeout(() => res.next(100), 2000);
    setTimeout(() => res.next(200), 4000);
    setTimeout(() => res.next(250), 7000);
    setTimeout(() => res.complete(), 10000);

    return res;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const res = new BehaviorSubject<number>(42);

    setTimeout(() => res.next(100), 2000);
    setTimeout(() => res.next(200), 4000);
    setTimeout(() => res.next(250), 7000);
    setTimeout(() => res.complete(), 10000);

    return res;
  }

  // 0:   A: 42
  // 2000: A: 100

  // 3500: B: 100
  // 4000: A, B: 200
  // 7000: A, B: 250
  // 10000: A, B: Completed




  go() {
    let observerA = this.createObserver('A');
    let observerB = this.createObserver('B');

    let observable = this.createCustomBehaviorSubject();

    observable.subscribe(observerA);    
    setTimeout(() => observable.subscribe(observerB), 3500);
  }
}

// A: 0
// A: 1
// A: 2
// A: 3
// B: 0
// A: 4
// B: 1