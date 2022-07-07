import { Injectable } from '@angular/core';
import { share, multicast, publish, interval, map, take, Observable, timer, tap, Subject, BehaviorSubject, ReplaySubject, ConnectableObservable, refCount, publishBehavior, publishReplay, shareReplay, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource$!: Observable<number>;


  constructor() { 
    const finiteCold$ = timer(5000).pipe(
      tap({
        next: val => console.log('next ' + val), 
        complete: () => console.log('complete'), 
        error: err => console.log('error ' + err)
      }),
      map(_ => 42), 
      );

    const valueSource$ = timer(3000).pipe(map(_ => Math.ceil(Math.random() * 100)));

    const interval$ = interval(3000).pipe(
      map(val => 10 + val), take(10), 
      tap({
        next: val => console.log('next ' + val), 
        complete: () => console.log('complete'), 
        error: err => console.log('error ' + err)
      }), 
      shareReplay({
        bufferSize: 3, 
        refCount: false
      })
      );

      const cachedRandom$ = valueSource$.pipe(
        multicast(() => new ReplaySubject(1))
      ) as ConnectableObservable<number>;

      let latestConnection: Subscription = new Subscription();

      interval(10000).subscribe(_ => {
        latestConnection.unsubscribe();
        latestConnection = cachedRandom$.connect();
      })

      this.dataSource$ = cachedRandom$;


  }

  getData(): Observable<number> {
    return this.dataSource$;
  }
}

/* The differences between ReplaySubject(1) and BehaviorSubject

1. Behavior subject sends an initial (fake) value, if we subscribe too early. before the source yielded any events
   Repaly subject doesnt
2. When completed, Behavior subject only sends "complete" without the latest value, if we subscribe too late.
   Replay subject, replays the latest value

  publish() ====> multicast(new Subject());
  publishBehavior(-1) ====> multicast(new BehaviorSubject(-1));
  publishReplay(3) ====> mulitcast(new ReplaySubject(3));

  share() ====> multicast(() => new Subject());
  shareReplay(3) ====> shareReplay({refCount: false}) ====> multicast(new ReplaySubject(3), refcount*())
  shareReplay({refCount: true, bufferSize: 3}) =====> mulitcast(() => new ReplaySubject(3), refcount)
    but if the replay subject receives "complete" it will never recreate a new subject, and instead replay that same values received, along with the complete

  if you have scenario, where you are fetching constant data from the web, use shareReplay(1)


  [Cold source] [multicast(() => replaySubject(1))]

  })



  refcount* is counting references to connect, but it never disconnects

*/



