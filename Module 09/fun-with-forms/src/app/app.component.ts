import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required]), 
    email: new FormControl('', Validators.email), 
    fullName: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.minLength(10), Validators.required]), 
    address: new FormGroup({
      street: new FormControl('', [Validators.required]), 
      city: new FormControl('', [Validators.required])
    })
  })

  // username = new FormControl('user123', [
  //   Validators.required, 
  //   Validators.maxLength(10), 
  //   Validators.email
  // ]);

  
  // usernameValue$ = this.username.valueChanges;
  // usernameValid$ = this.username.statusChanges;

  // both$ = combineLatest([this.usernameValue$, this.usernameValid$]);

  // validUsernames$ = this.both$.pipe(
  //   filter(pair => pair[1] === 'VALID'), 
  //   map(pair => pair[0])
  // );

  ngOnInit(): void {
    // this.username.valueChanges.subscribe(val => console.log(`The username value has changed to ${val}`));
  }

  getControl(controlName: string): FormControl {
    return this.form.get(controlName) as FormControl;      
  }



}
