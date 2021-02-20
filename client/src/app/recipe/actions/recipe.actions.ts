import { createAction, props } from '@ngrx/store';
import { Recipe } from '../models/recipe.model';

export const getRecipeList = createAction('[Recipe] Get all recipes');
export const getRecipeListSuccess = createAction(
  '[Recipe] Get all recipes Success',
  props<{ recipeListResponse: any }>()
);
export const getRecipeListError = createAction(
  '[Recipe] Get all recipes Failure',
  props<{ errorMessage: string }>()
);

export const addRecipe = createAction(
  '[Recipe] Add recipe',
  props<{ recipeModel: Recipe }>()
);
export const addRecipeSuccess = createAction(
  '[Recipe] Add recipe Success',
  props<{ recipeResponse: any }>()
);
export const addRecipeError = createAction(
  '[Recipe] Add recipe Failure',
  props<{ errorMessage: string }>()
);

export const deleteRecipe = createAction(
  '[Recipe] Delete recipe',
  props<{ recipeId: number }>()
);
export const deleteRecipeSuccess = createAction(
  '[Recipe] Delete recipe Success',
  props<{ recipeResponse: any }>()
);
export const deleteRecipeError = createAction(
  '[Recipe] Delete recipe Failure',
  props<{ errorMessage: string }>()
);
