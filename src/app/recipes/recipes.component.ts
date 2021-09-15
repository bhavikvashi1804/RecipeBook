import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //provide the recipe service at here
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {

  selectedRecipeItemByTheUser!: Recipe;

  constructor(private recipeService: RecipeService) { 
    recipeService.selectedRecipe.subscribe((recipe: Recipe)=>{
      this.selectedRecipeItemByTheUser = recipe;
    });
  }

  ngOnInit(): void {
  }

}
