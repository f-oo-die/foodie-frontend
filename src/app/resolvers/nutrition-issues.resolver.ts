import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {NutritionIssueService} from '../services/nutrition-issue.service';
import {NutritionIssue} from '../interface/nutrition-issue';

@Injectable()
export class NutritionIssuesResolver implements Resolve<NutritionIssue[]> {

  constructor(private nutritionIssuesService: NutritionIssueService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NutritionIssue[]> {
    return this.nutritionIssuesService.getNutritionIssues();
  }
}
