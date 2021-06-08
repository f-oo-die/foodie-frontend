import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMealPlanComponent } from './daily-meal-plan.component';

describe('DailyMealPlanComponent', () => {
  let component: DailyMealPlanComponent;
  let fixture: ComponentFixture<DailyMealPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMealPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
