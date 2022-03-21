import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _URL: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyABPCvj4aHK5hG-H2Mv1WH8Gp7fIkM1a-A';

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this._URL, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
          } else {
            switch (errorRes.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
            }
            return throwError(errorMessage);
          }
        })
      );
  }
}
