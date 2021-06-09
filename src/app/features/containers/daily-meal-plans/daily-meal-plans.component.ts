import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DailyMealPlan } from 'src/app/interface/dailyMealPlan';
import { DailyMealPlanService } from 'src/app/services/dailyMealPlan.service';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'app-daily-meal-plans',
  templateUrl: './daily-meal-plans.component.html',
  styleUrls: ['./daily-meal-plans.component.css']
})
export class DailyMealPlansComponent implements OnInit {
  plans: DailyMealPlan[];
  latestPlan: DailyMealPlan;
  userId: number;
  hasClicked: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private dailyMealPlanService: DailyMealPlanService,
    private router: Router,
    private actRoute: ActivatedRoute) {
      this.userId = this.authService.getId();
  }
  
  ngOnInit(): void {
    this.getDailyMealPlans();
    console.log(this.latestPlan);
  }

  getDailyMealPlans(){
    this.activatedRoute.data.subscribe(routeData => {
      this.plans = routeData.plans;
      this.latestPlan = routeData.latestPlan;
    });
    if (this.actRoute.snapshot.params.id) {
      this.hasClicked = true;
    }
  }

  createNewPlan(){
    this.dailyMealPlanService.createMealPlan().subscribe(newPlan => {
      this.latestPlan = newPlan;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/meal-planning']);
      });
    });
  }
}
