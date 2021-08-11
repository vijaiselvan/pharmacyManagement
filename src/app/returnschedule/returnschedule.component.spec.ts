import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnscheduleComponent } from './returnschedule.component';

describe('ReturnscheduleComponent', () => {
  let component: ReturnscheduleComponent;
  let fixture: ComponentFixture<ReturnscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
