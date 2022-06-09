import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly takenUsernames = [
    'johns', 
    'johney', 
    'johny', 
    'john'
  ];

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async isUserAvailable(username: string): Promise<boolean> {
    await this.delay(3000);

    return !this.takenUsernames.includes(username);
  }

  async validateUser(control: AbstractControl): Promise<null | ValidationErrors> {
    console.log('usersService.validateUser', this);
    const val = control.value;
    if (typeof(val) !== 'string') return null;

    const available = await this.isUserAvailable(val);
    if (available) return null;

    return {'userAvailable': true};
  }
}
