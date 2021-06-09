import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyMealPlan } from 'src/app/interface/dailyMealPlan';
import { DailyMealPlanService } from 'src/app/services/dailyMealPlan.service';

@Component({
  selector: 'app-daily-meal-plan-details',
  templateUrl: './daily-meal-plan-details.component.html',
  styleUrls: ['./daily-meal-plan-details.component.css']
})
export class DailyMealPlanDetailsComponent implements OnInit {

  dailyMealPlan: DailyMealPlan;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dailyMealPlanService: DailyMealPlanService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.dailyMealPlan = routeData.plan;
    });
  }
}
