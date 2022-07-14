import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-quiz-done',
  templateUrl: './quiz-done.component.html',
  styleUrls: ['./quiz-done.component.scss']
})
export class QuizDoneComponent implements OnInit {
  correct$!: Observable<number>;
  wrong$!: Observable<number>;
  score$!:Observable<number>;


  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.correct$ = this.store.select(AppSelectors.correctCount);
    this.wrong$ = this.store.select(AppSelectors.wrongCount);
    this.score$ = this.store.select(AppSelectors.score);
  }

}
