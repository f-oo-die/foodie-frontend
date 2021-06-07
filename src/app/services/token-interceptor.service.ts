import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth/shared/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

      const idToken = this.authService.getJwtToken();

      if (idToken) {
        /*const cloned = req.clone({
          headers: req.headers.set('Authorization',
            'Bearer ' + idToken).set('Access-Control-Allow-Origin', '*')
        });
        return next.handle(cloned);
      }
      else {
        return next.handle(req);
      }
  }   */
        req = req.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authService.getJwtToken()}`,
          },
        });
        return next.handle(req);
      }
      else{
        return next.handle(req);
      }
  }
}