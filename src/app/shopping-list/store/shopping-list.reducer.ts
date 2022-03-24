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
  on(ShoppingListAction.updateIngredient, (state, { ingredient }) => {
    const selectedIngredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...selectedIngredient, // we have copied old one because, if Ingredient contains ID then we will just change it values
      ...ingredient,
    };

    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

    return {
      ...state,
      ingredients: updatedIngredients,
    };
  }),
  on(ShoppingListAction.deleteIngredient, (state) => {
    return {
      ...state,
      ingredients: state.ingredients.filter(
        (ele, eleIndex) => eleIndex !== state.editedIngredientIndex
      ),
    };
  }),
  on(ShoppingListAction.startEdit, (state, { index }) => {
    return {
      ...state,
      editedIngredientIndex: index,
      editedIngredient: state.ingredients[index],
    };
  }),
  on(ShoppingListAction.stopEdit, (state) => {
    return {
      ...state,
      editedIngredientIndex: -1,
      editedIngredient: null,
    };
  })
);
