import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  authStatus$!: Observable<boolean>

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.authStatus$ = this.auth.getStatus();
  }

  signIn() {
    this.auth.signIn();
  }

  signOut() {
    this.auth.signOut();
  }

}
