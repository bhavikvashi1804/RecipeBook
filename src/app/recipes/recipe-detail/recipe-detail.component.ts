import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input()
  selectedRecipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      let recipeId = params['recipeId'];
      this.selectedRecipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredientsToList(
      this.selectedRecipe.ingredients
    );
  }
}
