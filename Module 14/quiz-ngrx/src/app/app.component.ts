import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from './models/question.model';
import { AppActions, AppSelectors } from './redux/app.types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentQuestion$!: Observable<Question>;
  isQuizDone$!: Observable<boolean>;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    this.currentQuestion$ = this.store.select(AppSelectors.currentQuestion);
    this.isQuizDone$ = this.store.select(AppSelectors.isQuizDone);
  }

  onReset() {
    const action = AppActions.reset();
    this.store.dispatch(action);
  }

  onAnswer(answerIndex: number) {
    const action = AppActions.answerCurrentQuestion({answerIndex});
    this.store.dispatch(action);
  }

}
