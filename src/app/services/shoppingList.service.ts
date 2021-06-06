import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ShoppingList} from '../interface/shoppingList';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  apiUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getShoppingLists(): Observable<ShoppingList[]>{
    return this.http.get<ShoppingList[]>(`${this.apiUrl}/shopping-list`);
  }

  getShoppingList(id: string): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${this.apiUrl}/shopping-list/${id}`);
  }
}
