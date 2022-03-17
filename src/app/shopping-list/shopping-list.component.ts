import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private idChangedSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.idChangedSub = shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredientsList();
  }

  ngOnDestroy(): void {
      this.idChangedSub.unsubscribe();
  }

  onEditItem(id: number){
    this.shoppingListService.startedEditing.next(id);
  }
}
