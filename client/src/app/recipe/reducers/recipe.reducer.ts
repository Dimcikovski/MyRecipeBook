import { Action, createReducer, on } from '@ngrx/store';
import { LoadingState } from 'src/app/shared/models/state.models';
import { Recipe } from '../models/recipe.model';
import * as RecipeActions from '../actions/recipe.actions';

export const recipeFeatureKey = 'recipe';

export interface RecipeState {
  recipeList: Recipe[];
  callState: LoadingState;
  message: string;
}

export const initialRecipeState: RecipeState = {
  recipeList: [],
  callState: LoadingState.INIT,
  message: undefined,
};

const scoreboardReducer = createReducer(
  initialRecipeState,
  on(RecipeActions.getRecipeList, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(RecipeActions.getRecipeListSuccess, (state, action) => ({
    ...state,
    recipeList: action.recipeListResponse,
    callState: LoadingState.LOADED,
  })),
  on(RecipeActions.getRecipeListError, (state, action) => ({
    ...state,
    recipeList: [],
    callState: LoadingState.ERROR,
    message: action.errorMessage,
  })),
  on(RecipeActions.addRecipe, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(RecipeActions.addRecipeSuccess, (state, action) => {
    const extendedRecipeList = [...state.recipeList];
    const updatedRecipeModel = { ...action.recipeModel };
    updatedRecipeModel.id = action.id;
    extendedRecipeList.push(updatedRecipeModel);
    return {
      ...state,
      callState: LoadingState.LOADED,
      recipeList: extendedRecipeList,
    };
  }),
  on(RecipeActions.addRecipeError, (state, action) => ({
    ...state,
    callState: LoadingState.ERROR,
    message: action.errorMessage,
  })),
  on(RecipeActions.deleteRecipe, (state) => ({
    ...state,
    callState: LoadingState.LOADING,
  })),
  on(RecipeActions.deleteRecipeSuccess, (state, action) => {
    const filteredRecipeList = state.recipeList.filter(
      (item) => item.id !== action.recipeId
    );
    return {
      ...state,
      callState: LoadingState.LOADED,
      recipeList: filteredRecipeList,
    };
  }),
  on(RecipeActions.deleteRecipeError, (state, action) => ({
    ...state,
    callState: LoadingState.ERROR,
    message: action.errorMessage,
  }))
);

export function reducer(
  state: RecipeState | undefined,
  action: Action
): RecipeState {
  return scoreboardReducer(state, action);
}
