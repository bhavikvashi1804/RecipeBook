import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banan', 2),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() {}

  getIngredientsList(): Ingredient[] {
    return this.ingredients.slice();
    //return this.ingredients;
  }

  addNewIngredientToList(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
