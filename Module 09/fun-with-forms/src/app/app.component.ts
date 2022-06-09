import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = new FormControl('user123', [
    Validators.required, 
    Validators.maxLength(10), 
    Validators.email
  ]);

  
  usernameValue$ = this.username.valueChanges;
  usernameValid$ = this.username.statusChanges;

  both$ = combineLatest([this.usernameValue$, this.usernameValid$]);

  validUsernames$ = this.both$.pipe(
    filter(pair => pair[1] === 'VALID'), 
    map(pair => pair[0])
  );

  ngOnInit(): void {
    this.username.valueChanges.subscribe(val => console.log(`The username value has changed to ${val}`));
  }



}
