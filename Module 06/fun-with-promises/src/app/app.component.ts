import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promiseResolver: (res: number) => void = i => {};


  createPromise(): Promise<number> {
    return new Promise<number>((res, rej) => {
        setTimeout(() => res(42), 4000)
    });
  }

  createUserControlledPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.promiseResolver = resolve;
    });


  }

  createRandomPromise(): Promise<number> {
    let delay = Math.random() * 2000 + 2000; // 2000..4000
    let result = Math.ceil(Math.random() * 100); // 1..100

    return new Promise<number>((resolve, rej) => {
      setTimeout(() => resolve(result), delay);
    })
  }

  createRandomStringPromise(): Promise<string> {
    let delay = Math.random() * 2000 + 2000; // 2000..4000
    let result = Math.ceil(Math.random() * 100).toString(); // 1..100

    return new Promise<string>((resolve, rej) => {
      setTimeout(() => resolve(result), delay);
    })
  }


  // go() {
  //   let p = this.createPromise();

  //   console.log('1');

  //   let p2 = p.then(res => {
  //     console.log(res);
  //     console.log('2');

  //     let v = res + 10;
  //     let s = v.toString();
  //     return s;
  //   });

  //   console.log('3');
  // }


  async go() {
    console.log('A');
    let res = await this.start();
    console.log('B');
  }

  async start() {
    console.log('1');
    let p = this.createUserControlledPromise();    
    console.log('2');

    let res = await p;

    console.log('3');
    console.log('Promise ended with the result:' + res);
    return res.toString();
  }

  // numberInAPromise() {
  //   let p = Promise.resolve(42);
  // }

  // failedPromise() {
  //   let p = Promise.reject<number>('Because I feel like it');
  // }

  // async go() {
  //   let promises = [
  //     this.createRandomPromise(), 
  //     this.createRandomStringPromise(), 
  //     this.createRandomPromise()
  //   ];

  //   let pall = Promise.race(promises);
  //   let resall = await pall;
  // }

  userCompletedThePromise(value: number) {
    this.promiseResolver(value);
  }

}


// How to create promises
// Promise Operators

// number operators: combinators (4 + 4, 2 * 3), pipeble (-5, 5!), factories (pi, e), 
// string operators: combinators (concat), pipeable (reverse, uppercase), factories (string constructor)
// array operators: pipeable (map, filter)


// pure function: function that is deterministic and immutable (has no side effects)

// Promise operators
// | Factories       | Pipeables   | Combinators  |
// +-----------------+-------------+--------------|
// | ctor            | then        | Promise.all  |
// | async wo await  | async-await | Promise.race |
// | Promise.resolve | catch       |    
// | Promise.reject  |


// ( (res: T => void, err => void) => void ) => Promise<T>

// let p = new Promise((resolveFunction, rejectFunction) => {
//
// });