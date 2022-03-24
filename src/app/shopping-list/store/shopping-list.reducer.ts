import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Banana', 2)],
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListAction.addIngredient, (state, { ingredient }) => {
    return {
      ...state,
      ingredent: [...state.ingredients, ingredient],
    };
  })
);
