import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { addIngredients } from 'src/app/shopping-list/store/shopping-list.actions';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import * as ShoppoingListReducer from '../../shopping-list/store/shopping-list.reducer';
import * as AppReducers from '../../store/app.reducer';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input()
  selectedRecipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppReducers.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let recipeId = params['recipeId'];
      this.selectedRecipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  addIngredientsToShoppingList() {
    // this.shoppingListService.addIngredientsToList(
    //   this.selectedRecipe.ingredients
    // );
    this.store.dispatch(
      addIngredients({ ingredients: this.selectedRecipe.ingredients })
    );
  }

  onRecipeDelete() {
    this.recipeService.deleteRecipeById(this.selectedRecipe.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
