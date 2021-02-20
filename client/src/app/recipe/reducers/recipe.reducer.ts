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
  }))
);

export function reducer(state: RecipeState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
