import { createSelector, createFeatureSelector } from '@ngrx/store';
import { recipeFeatureKey, RecipeState } from './recipe.reducer';

export const getRecipeFeatureState = createFeatureSelector<RecipeState>(
  recipeFeatureKey
);

export const getRecipesList = createSelector(
  getRecipeFeatureState,
  (state: RecipeState) => {
    return state.recipeList;
  }
);

export const getRecipeListLength = createSelector(
  getRecipeFeatureState,
  (state: RecipeState) => {
    return state.recipeList.length;
  }
);

export const getRecipeCallState = createSelector(
  getRecipeFeatureState,
  (state: RecipeState) => {
    return state.callState;
  }
);

export const getRecipeDetails = createSelector(
  getRecipeFeatureState,
  (state: RecipeState, props) => {
    const foundRecipe = state.recipeList.find((item) => item.id === props.id);
    return foundRecipe;
  }
);
