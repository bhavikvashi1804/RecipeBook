import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  @ViewChild('authForm')
  authForm!: NgForm;

  @ViewChild(PlaceholderDirective)
  placeHolder!: PlaceholderDirective;

  subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  // onClose() {
  //   this.error = '';
  // }

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
        this.router.navigate(['/recipes']);
      },
      (errorRes) => {
        this.error = errorRes;
        this.showAlertDialog(errorRes);
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }

  private showAlertDialog(errorMsg: string) {
    //const alertCmp = new AlertComponent();
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.placeHolder.viewContainerRef;

    //clear older rendered befored data
    hostViewContainerRef.clear();

    // create a new component
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = errorMsg;
    this.subscription = componentRef.instance.close.subscribe(() => {
      this.subscription.unsubscribe();
      hostViewContainerRef.clear();
      this.error = '';
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
