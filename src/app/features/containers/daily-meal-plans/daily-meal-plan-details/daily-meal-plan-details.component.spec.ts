import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealPlanDetailsComponent } from './daily-meal-plan-details.component';

describe('DailyMealPlanDetailsComponent', () => {
  let component: DailyMealPlanDetailsComponent;
  let fixture: ComponentFixture<DailyMealPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMealPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMealPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
