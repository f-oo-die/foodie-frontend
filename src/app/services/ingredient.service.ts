import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../interface/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  apiUrl:string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredients`);
  }
}
