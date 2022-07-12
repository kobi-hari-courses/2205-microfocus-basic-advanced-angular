import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APresenterComponent } from './a-presenter.component';

describe('APresenterComponent', () => {
  let component: APresenterComponent;
  let fixture: ComponentFixture<APresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
