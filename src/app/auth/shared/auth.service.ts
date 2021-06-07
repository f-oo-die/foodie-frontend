import {Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignupRequestPayload} from '../signup/signup-request.payload';
import {Observable} from 'rxjs';
import {LoginRequestPayload} from '../login/login.request.payload';
import {LoginResponse} from '../login/login-response.payload';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @Output() loggedIn: EventEmmiter<boolean> = new Eventemitter();
  // @Output() username: EventEmmiter<string> = new EventEmmiter();

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) {

  }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, {responseType: 'text'});
  }
  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login',
      loginRequestPayload).pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('id', data.id);
        return true;
    }));
  }
  logout() {
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
  }
  getUsername() {
    return this.localStorage.retrieve('username');
  }
  getId() {
    return this.localStorage.retrieve('id');
  }
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }
  isLoggedIn(): boolean{
    return this.getJwtToken() != null;
  }
}
