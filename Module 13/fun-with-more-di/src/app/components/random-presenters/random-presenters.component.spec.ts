import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPresentersComponent } from './random-presenters.component';

describe('RandomPresentersComponent', () => {
  let component: RandomPresentersComponent;
  let fixture: ComponentFixture<RandomPresentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPresentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPresentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
