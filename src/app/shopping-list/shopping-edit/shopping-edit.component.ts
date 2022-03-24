import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListAction from '../store/shopping-list.actions';
import * as ShoppoingListReducer from '../store/shopping-list.reducer';
import * as AppReducers from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm ')
  shoppingForm!: NgForm;

  selectedIngredient!: Ingredient | null;
  subscription!: Subscription;
  editMode = false;
  editItemIndex!: number;

  constructor(private store: Store<AppReducers.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe((state) => {
      if (state.editedIngredientIndex > -1) {
        this.editItemIndex = state.editedIngredientIndex;
        this.selectedIngredient = state.editedIngredient;

        this.editMode = true;
        this.shoppingForm.form.setValue({
          name: this.selectedIngredient?.name,
          amount: this.selectedIngredient?.amount,
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    this.store.dispatch(ShoppingListAction.stopEdit());
  }

  /*
  onAddItem() {
    let ingredient = new Ingredient(
      this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value
    );

    this.shoppingListService.addNewIngredientToList(ingredient);

    this.itemName.nativeElement.value = '';
    this.itemAmount.nativeElement.value = '';
  }
  */

  check() {
    console.log(this.shoppingForm);
  }

  saveDetails() {
    let ingredient = new Ingredient(
      this.shoppingForm.value.name,
      this.shoppingForm.value.amount
    );

    //console.log(ingredient);
    if (this.editMode) {
      this.store.dispatch(
        ShoppingListAction.updateIngredient({
          ingredient: ingredient,
        })
      );
    } else {
      this.store.dispatch(
        ShoppingListAction.addIngredient({ ingredient: ingredient })
      );
    }

    this.resetShoppingForm();
  }

  onDeleteItem() {
    this.store.dispatch(ShoppingListAction.deleteIngredient());
    this.resetShoppingForm();
  }

  resetShoppingForm() {
    this.shoppingForm.reset();
    this.editMode = false;
    this.store.dispatch(ShoppingListAction.stopEdit());
  }
}
