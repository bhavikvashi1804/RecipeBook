import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaust, exhaustMap, map, take } from 'rxjs/operators';
import { AppState } from '../store/app.reducer';
import { AuthService } from './auth.service';

@Injectable()
export class AuthIntercetorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      map((authState) => authState.user),
      exhaustMap((userData) => {
        if (userData?.token == '') {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', userData?.token!),
        });

        return next.handle(modifiedReq);
      })
    );
  }
}
