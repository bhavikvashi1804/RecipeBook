import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

      if (this.editMode) {
        this.loadedRecipe = this.recipeService.getRecipeById(this.id);
      }
    });
  }
}
