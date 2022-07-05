import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneComponent } from './example-one.component';

describe('ExampleOneComponent', () => {
  let component: ExampleOneComponent;
  let fixture: ComponentFixture<ExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
