import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NutritionIssue} from '../interface/nutrition-issue';
import {Recipe} from '../interface/recipe';

@Injectable({
  providedIn: 'root'
})
export class NutritionIssueService {

  apiUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getNutritionIssues(): Observable<NutritionIssue[]>{
    return this.http.get<NutritionIssue[]>(`${this.apiUrl}/nutrition-issues`);
  }

  getRecipe(id: string): Observable<NutritionIssue> {
    return this.http.get<NutritionIssue>(`${this.apiUrl}/nutrition-issues/${id}`);
  }

  createNutritionIssue(nutritionIssue: NutritionIssue): Observable<NutritionIssue> {
    return this.http.post<NutritionIssue>(`${this.apiUrl}/nutrition-issues`, nutritionIssue);
  }
}
