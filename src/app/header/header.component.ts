import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;

  subscription!: Subscription;

  constructor(
    private storageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true; // !!user
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSaveData() {
    this.storageService.storeRecipes();
  }

  onFetchData() {
    this.storageService.fetchRecipes();
  }
}
