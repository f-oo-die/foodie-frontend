import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IngredientService} from '../services/ingredient.service';
import {Ingredient} from '../interface/ingredient';
import { DailyMealPlan } from '../interface/dailyMealPlan';
import { DailyMealPlanService } from '../services/dailyMealPlan.service';

@Injectable()
export class DailyMealPlanResolver implements Resolve<DailyMealPlan> {

  constructor(private dailyMealPlanService: DailyMealPlanService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DailyMealPlan> {
    return this.dailyMealPlanService.getMealPlan(route.paramMap.get('id'));
  }
}
