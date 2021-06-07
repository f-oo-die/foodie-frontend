import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ShoppingList} from '../interface/shoppingList';
import {Recipe} from '../interface/recipe';
import {AuthService} from '../auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  apiUrl: string = environment.api;
  userId: number;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.userId = this.authService.getId();
  }

  getShoppingLists(): Observable<ShoppingList[]>{
    return this.http.get<ShoppingList[]>(`${this.apiUrl}/shopping-list/${this.userId}`);
  }

  getShoppingList(id: string): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}/${id}`);
  }

  createShoppingList(): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}`, '');
  }

  deleteShoppingList(id: number): Observable<ShoppingList> {
    return this.http.delete<ShoppingList>(`${this.apiUrl}/shopping-list/${this.userId}/${id}`);
  }
}
