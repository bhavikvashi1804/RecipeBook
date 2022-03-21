import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://angular-learn-70c92-default-rtdb.firebaseio.com/data.json',
        {
          recipes,
        }
      )
      .subscribe((data) => {
        //console.log(data);
      });
  }

  fetchRecipes() {
    this.http
      .get('https://angular-learn-70c92-default-rtdb.firebaseio.com/data.json')
      .subscribe(
        (data: { [key: string]: any }) => {
          let recipes: Recipe[] = data['recipes'];

          recipes = recipes.map((ele) => {
            return {
              ...ele,
              ingredients: ele.ingredients ? ele.ingredients : [],
            };
          });

          this.recipesService.setTheFetchedRecipes(recipes);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getRecipesData() {
    return this.http
      .get<Recipe[]>(
        'https://angular-learn-70c92-default-rtdb.firebaseio.com/data.json'
      )
      .pipe(
        map((data: { [key: string]: any }) => {
          let recipes: Recipe[] = data['recipes'];
          // add ingredients if Ingredients were not present
          recipes = recipes.map((ele) => {
            return {
              ...ele,
              ingredients: ele.ingredients ? ele.ingredients : [],
            };
          });
          return recipes;
        })
      );
  }
}
