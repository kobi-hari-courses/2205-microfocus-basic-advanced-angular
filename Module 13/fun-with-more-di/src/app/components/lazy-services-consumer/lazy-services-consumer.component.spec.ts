import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyServicesConsumerComponent } from './lazy-services-consumer.component';

describe('LazyServicesConsumerComponent', () => {
  let component: LazyServicesConsumerComponent;
  let fixture: ComponentFixture<LazyServicesConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyServicesConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyServicesConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
