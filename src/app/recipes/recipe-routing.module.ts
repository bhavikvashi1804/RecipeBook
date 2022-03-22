import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeResolver } from './recipes-resolver.service';
import { RecipesComponent } from './recipes.component';

const recipeRuotes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    resolve: [RecipeResolver],
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      // first static routes
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      // then parameterized route
      {
        path: ':recipeId',
        component: RecipeDetailComponent,
        resolve: [RecipeResolver],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRuotes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
