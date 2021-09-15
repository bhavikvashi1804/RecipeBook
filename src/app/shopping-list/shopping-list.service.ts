import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banan', 2),
  ];

  constructor() {}

  getIngredientsList(): Ingredient[] {
    //return this.ingredients.slice();
    return this.ingredients;
  }

  addNewIngredientToList(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
