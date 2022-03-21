import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  //list of recipes
  /*private recipes: Recipe[] = [
    new Recipe(
      1,
      'Burger',
      'A hamburger is a food, typically considered a sandwich',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h3qzjekted0xjdpdrbjz',
      [new Ingredient('Bun', 10), new Ingredient('Allo Tikki', 2)]
    ),
    new Recipe(
      2,
      'Coffee',
      'Coffee is a brewed drink prepared from roasted coffee beans',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg',
      [new Ingredient('Base', 10), new Ingredient('Cheese', 5)]
    ),
  ];
  */
  private recipes: Recipe[] = [];
  // Event Emitter of selectedRecipe
  selectedRecipe = new Subject<Recipe>();

  // Subject of List Of Recipe
  recipeChanges = new Subject<Recipe[]>();

  constructor() {}

  getRecipes() {
    //to return only copy not reference
    //so using this recipe method, in app we can't delete or add the items
    return this.recipes.slice();
    //this.recipesSubject.next(this.recipes.slice());
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.find((ele) => ele.id == id)!;
  }

  updateRecipe(recipe: Recipe) {
    console.log('Update the recipe');
    let selectedRecipe = this.recipes.find((ele) => ele.id == recipe.id);

    selectedRecipe!.name = recipe.name;
    selectedRecipe!.imagePath = recipe.imagePath;
    selectedRecipe!.description = recipe.description;
    selectedRecipe!.ingredients = recipe.ingredients;
    this.recipeChanges.next(this.recipes.slice());
  }

  addNewRecipe(recipe: Recipe) {
    console.log('Add New Recipe');
    let lastId = this.recipes[this.recipes.length - 1].id;
    recipe.id = lastId + 1;
    this.recipes.push(recipe);
    this.recipeChanges.next(this.recipes.slice());
  }

  deleteRecipeById(id: number) {
    let selectedRecipe = this.recipes.find((ele) => ele.id == id);
    this.recipes = this.recipes.filter((ele) => ele.id != id);
    this.recipeChanges.next(this.recipes.slice());
  }

  setTheFetchedRecipes(recipeArray: Recipe[]) {
    console.log('Recipes Loaded: ');
    console.log(recipeArray);
    this.recipes = recipeArray;
    console.log(typeof this.recipes);
    this.recipeChanges.next(this.recipes.slice());
  }
}
