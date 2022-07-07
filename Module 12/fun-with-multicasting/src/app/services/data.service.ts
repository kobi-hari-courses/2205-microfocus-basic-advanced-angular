import { Injectable } from '@angular/core';
import { interval, map, take, Observable, timer, tap } from 'rxjs';

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

    const interval$ = interval(1000);
    
    this.dataSource$ = interval$;
  }

  getData(): Observable<number> {
    return this.dataSource$;
  }
}



/*

  Cold vs Hot vs Warm
  Finite vs Infinite

*/