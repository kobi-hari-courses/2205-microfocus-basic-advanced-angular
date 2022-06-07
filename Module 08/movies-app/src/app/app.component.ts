import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$!: Observable<string>;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.user$ = this.auth.getUser();
  }

}
