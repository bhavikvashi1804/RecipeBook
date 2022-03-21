import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //user Data's Subject
  user = new BehaviorSubject<User>(new User('', '', '', new Date()));

  private signUpURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABPCvj4aHK5hG-H2Mv1WH8Gp7fIkM1a-A';

  private loginURL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABPCvj4aHK5hG-H2Mv1WH8Gp7fIkM1a-A';

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signUpURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginURL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logOut() {
    this.user.next(new User('', '', '', new Date()));
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
  }

  private handleAuth(
    email: string,
    localId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + +expiresIn * 1000);
    let user = new User(email, localId, token, expDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  //if page is refreshed
  autoLogin() {
    if (localStorage.getItem('userData')) {
      const userData: {
        email: string;
        id: string;
        _token: string;
        _expDate: string;
      } = JSON.parse(localStorage.getItem('userData')!);
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._expDate)
      );

      if (loadedUser.token) {
        this.user.next(loadedUser);
      }
    }
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    } else {
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct';
          break;
        case 'USER_DISABLED':
          errorMessage =
            'Your account is locked! Kindly get in touch with administrator.';
          break;
      }
      return throwError(errorMessage);
    }
  }
}
