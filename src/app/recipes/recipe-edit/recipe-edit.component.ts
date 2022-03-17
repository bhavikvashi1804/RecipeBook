import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recipeService: RecipeService,
    private router: Router
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
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      let recipe: Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeImage = recipe.imagePath;
      //ingredients = recipe.ingredients;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      imagePath: new FormControl(recipeImage, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit(): void {
    //console.log(this.recipeForm);
    let submittedRecipe: Recipe = new Recipe(
      this.editMode ? this.id : 0,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(submittedRecipe);
    } else {
      this.recipeService.addNewRecipe(submittedRecipe);
    }

    this.router.navigate(['../'], { relativeTo: this.activateRoute });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activateRoute });
  }

  addNewIngredientControl() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredientControl(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getName() {
    this.recipeForm.get('name');
  }
  getDesc() {
    this.recipeForm.get('description');
  }
  getImagePath() {
    this.recipeForm.get('imagePath');
  }
  getIngredients() {
    this.recipeForm.get('ingredients');
  }
}
