import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createPromise(): Promise<number> {
    return new Promise<number>((res, rej) => {
        setTimeout(() => res(42), 4000)
    });
  }

  // go() {
  //   let p = this.createPromise();

  //   console.log('1');

  //   p.then(res => {
  //     console.log(res);
  //     console.log('2');
  //   });

  //   console.log('3');
  // }


  go() {
    console.log('A');
    this.start();
    console.log('B');
  }

  async start() {
    console.log('1');
    let p = this.createPromise();
    console.log('2');

    let res = await p;

    console.log('3');
    return res;
  }

}
