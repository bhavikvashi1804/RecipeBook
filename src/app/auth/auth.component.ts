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

    if (this.isLoginMode) {
    } else {
      this.authService.signUp(email,password).subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
    }

    this.authForm.reset();
  }
}
