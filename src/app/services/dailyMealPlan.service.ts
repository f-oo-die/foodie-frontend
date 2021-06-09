import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { AuthService } from '../features/auth/shared/auth.service';
import { DailyMealPlan } from '../interface/dailyMealPlan';
import { User } from '../interface/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DailyMealPlanService {
  apiUrl: string = environment.api;
  userId: number;
  user: User;

  constructor(private http: HttpClient, 
              private authService: AuthService,
              private userService: UserService,
              private router: Router) {
    this.userId = this.authService.getId();
  }

  checkIfNull(): boolean {
    this.userService.getUser(this.userId + "").subscribe( user => this.user = user);
    if (this.user.height == undefined || this.user.weight == undefined || this.user.nutritionIssues.length == 0) return false;
    return true;
  }

  getAllMealPlans(): Observable<DailyMealPlan[]>{
    if (this.checkIfNull()) return this.http.get<DailyMealPlan[]>(`${this.apiUrl}/meal-planning/${this.userId}`);
    else { 
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/profile/${this.userId}`]);
      });
    }
  }

  getLatestMealPlan(): Observable<DailyMealPlan> {
    if (this.checkIfNull()) return this.http.get<DailyMealPlan>(`${this.apiUrl}/meal-planning/${this.userId}/latest`);
    return null;
  }

  getMealPlan(id: string): Observable<DailyMealPlan> {
    return this.http.get<DailyMealPlan>(`${this.apiUrl}/meal-planning/${this.userId}/${id}`);
  }

  createMealPlan(): Observable<DailyMealPlan> {
    return this.http.post<DailyMealPlan>(`${this.apiUrl}/meal-planning/${this.userId}`, null);
  }
}
