import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyavailedComponent } from './supplyavailed.component';

describe('SupplyavailedComponent', () => {
  let component: SupplyavailedComponent;
  let fixture: ComponentFixture<SupplyavailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyavailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyavailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
