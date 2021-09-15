import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';


export class RecipeService {


  //list of recipes
  private recipes: Recipe[] = [
    new Recipe(
        "Burger", 
        "A hamburger is a food, typically considered a sandwich",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h3qzjekted0xjdpdrbjz",
        [
          new Ingredient('Bun', 10),
          new Ingredient('Allo Tikki', 2)
        ]
    ),
    new Recipe(
      "Coffee", 
      "Coffee is a brewed drink prepared from roasted coffee beans",
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
      [
        new Ingredient('Base', 10),
        new Ingredient('Cheese', 5)
      ]
    ),
  ];

  // Event Emitter of selectedRecipe
  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }


  getRecipes(): Recipe[]{
    //to return only copy not reference
    //so using this recipe method, in app we can't delete or add the items
    return this.recipes.slice();
  }
}
