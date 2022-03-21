import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  @ViewChild('authForm')
  authForm!: NgForm;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    //console.log(this.authForm.value.email);
    let email = this.authForm.value.email;
    let password = this.authForm.value.password;

    this.isLoading = true;
    this.error = '';
    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      (data) => {
        this.isLoading = false;
      },
      (errorRes) => {
        this.error = errorRes;
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }
}
