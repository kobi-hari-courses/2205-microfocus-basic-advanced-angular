import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDoneComponent } from './quiz-done.component';

describe('QuizDoneComponent', () => {
  let component: QuizDoneComponent;
  let fixture: ComponentFixture<QuizDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
