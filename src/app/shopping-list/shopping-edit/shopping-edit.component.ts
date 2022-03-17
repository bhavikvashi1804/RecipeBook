import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm ')
  shoppingForm!: NgForm;

  selectedIngredient!: Ingredient;
  subscription!: Subscription;
  editMode = false;
  editItemIndex!: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.selectedIngredient =
          this.shoppingListService.getIngredientByIndex(id);

        this.editMode = true;
        this.editItemIndex = id;
        this.shoppingForm.form.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  saveDetails() {
    let ingredient = new Ingredient(
      this.shoppingForm.value.name,
      this.shoppingForm.value.amount
    );

    //console.log(ingredient);
    if (this.editMode) {
      this.shoppingListService.updateIngredientByIndex(
        ingredient,
        this.editItemIndex
      );
    } else {
      this.shoppingListService.addNewIngredientToList(ingredient);
    }

    this.shoppingForm.reset();
    this.editMode = false;
  }

  resetShoppingForm() {
    this.shoppingForm.reset();
    this.editMode = false;
  }
}
