import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedemandComponent } from './placedemand.component';

describe('PlacedemandComponent', () => {
  let component: PlacedemandComponent;
  let fixture: ComponentFixture<PlacedemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
