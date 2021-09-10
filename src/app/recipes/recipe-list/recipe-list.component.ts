import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Recipe 1", "Description 1","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe("Recipe 2", "Description 2","https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
