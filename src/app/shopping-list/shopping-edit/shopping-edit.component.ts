import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  itemName!: ElementRef;

  @ViewChild('amountInput')
  itemAmount!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    let ingredient = new Ingredient(
      this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value
    );

    this.shoppingListService.addNewIngredientToList(ingredient);

    this.itemName.nativeElement.value = '';
    this.itemAmount.nativeElement.value = '';
  }
}
