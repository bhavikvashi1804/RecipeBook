import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

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
          this.recipesService.setTheFetchedRecipes(data['recipes']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
