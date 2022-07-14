import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from './models/question.model';
import { AppSelectors } from './redux/app.types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentQuestion$!: Observable<Question>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    this.currentQuestion$ = this.store.select(AppSelectors.currentQuestion);
  }

}
