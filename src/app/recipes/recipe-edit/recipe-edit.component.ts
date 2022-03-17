import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  loadedRecipe!: Recipe;
  recipeForm!: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      //if ID present then edit else enter new Recipe
      this.editMode = params['id'] != null;
      //console.log(this.editMode);

      this.initForm();
    });

    
  }

  private initForm() {
    let recipeName = '';
    let recipeDesc = '';
    let recipeImage = '';
    let ingredients: Ingredient[] = [];

    if (this.editMode) {
      let recipe: Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImage = recipe.imagePath;
      ingredients = recipe.ingredients;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      imagePath: new FormControl(recipeImage, Validators.required),
    });
  }


  onSubmit(): void {
    console.log(this.recipeForm);
  }
}
