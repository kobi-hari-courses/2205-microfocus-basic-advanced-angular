import { Injectable } from '@angular/core';
import { delay } from './delay';

@Injectable({
  providedIn: 'root'
})
export class Lazy2Service {
  private value: number = -1;

  public getValue() {
    return this.value;
  }

  constructor() { 
  }

  async init(): Promise<void> {
    await delay(5000);
    this.value = 100;
    console.log('service 2 initialization completed');
  }
}
