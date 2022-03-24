import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppoingListReducer from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as AppReducers from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Observable<{ ingredients: Ingredient[] }>;
  //private idChangedSub: Subscription;

  constructor(private store: Store<AppReducers.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList'); // select the store
  }

  ngOnDestroy(): void {}

  onEditItem(id: number) {
    //this.store.select('shoppingList');
    this.store.dispatch(ShoppingListActions.startEdit({ index: id }));
  }
}
