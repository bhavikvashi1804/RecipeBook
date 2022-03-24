import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient | null;
  editedIngredientIndex: number;
}

export interface ShoppingListAppState {
  shoppingList: State;
}

const initialState: State = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Banana', 2)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListAction.addIngredient, (state, { ingredient }) => {
    return {
      ...state,
      ingredients: [...state.ingredients, ingredient],
    };
  }),
  on(ShoppingListAction.addIngredients, (state, { ingredients }) => {
    return {
      ...state,
      ingredients: [...state.ingredients, ...ingredients],
    };
  }),
  on(ShoppingListAction.updateIngredient, (state, { index, ingredient }) => {
    const selectedIngredient = state.ingredients[index];
    const updatedIngredient = {
      ...selectedIngredient, // we have copied old one because, if Ingredient contains ID then we will just change it values
      ...ingredient,
    };

    const updatedIngredients = [...state.ingredients];
    updatedIngredients[index] = updatedIngredient;

    return {
      ...state,
      ingredients: updatedIngredients,
    };
  }),
  on(ShoppingListAction.deleteIngredient, (state, { index }) => {
    return {
      ...state,
      ingredients: state.ingredients.filter(
        (ele, eleIndex) => eleIndex !== index
      ),
    };
  })
);
