import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

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
    if (this.isLoginMode) {
    } else {
      this.authService.signUp(email, password).subscribe(
        (data) => {
          console.log(data);
          this.isLoading = false;
        },
        (errorRes) => {
          //console.log(errorRes);
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              this.error = 'This email exists already';
          }
          this.isLoading = false;
        }
      );
    }

    this.authForm.reset();
  }
}
