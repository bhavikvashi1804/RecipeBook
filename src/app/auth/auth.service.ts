import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post<AuthResponseData>(this._URL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
