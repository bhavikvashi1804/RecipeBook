import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  changeSelectedRecipeWithData = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
        "Burger", 
        "A hamburger is a food, typically considered a sandwich",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h3qzjekted0xjdpdrbjz"),
    new Recipe(
      "Coffee", 
      "Coffee is a brewed drink prepared from roasted coffee beans",
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedRecipe(recipeItem: Recipe){
    this.changeSelectedRecipeWithData.emit(recipeItem);
  }

}
