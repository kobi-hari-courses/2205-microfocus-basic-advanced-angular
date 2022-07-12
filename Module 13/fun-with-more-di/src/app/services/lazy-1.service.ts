import { Injectable } from '@angular/core';
import { delay } from './delay';

@Injectable({
  providedIn: 'root'
})
export class Lazy1Service {
  private value: number = -1;

  public getValue() {
    return this.value;
  }

  constructor() { 
  }


  async init(): Promise<void> {
    console.log('starting initialization of service 1');
    await delay(3000);
    this.value = 42;
    console.log('service 1 initialization completed');
  }
}
