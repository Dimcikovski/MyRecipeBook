import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MockApiService } from 'src/app/recipe-book-api/mock-api/mock-api.service';
import { RecipeDTO } from 'src/app/recipe-book-api/mock-api/models/recipeDTO.model';
import * as recipeActions from '../actions/recipe.actions';

@Injectable()
export class RecipeEffects {
  loadRecipeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeActions.getRecipeList),
      switchMap(() =>
        this.recipeApiService.GetAllRecipes().pipe(
          map((responseData) =>
            recipeActions.getRecipeListSuccess({
              recipeListResponse: responseData,
            })
          ),
          catchError((err) =>
            of(recipeActions.getRecipeListError({ errorMessage: err }))
          )
        )
      )
    )
  );

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeActions.addRecipe),
      switchMap((action) =>
        this.recipeApiService.CreateRecipe(action.recipeModel).pipe(
          map((responseData: RecipeDTO) =>
            recipeActions.addRecipeSuccess({
              recipeModel: action.recipeModel,
              id: responseData.id,
            })
          ),
          catchError((err) =>
            of(recipeActions.addRecipeError({ errorMessage: err }))
          )
        )
      )
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeActions.deleteRecipe),
      switchMap((action) =>
        this.recipeApiService.DeleteRecipe(action.recipeId).pipe(
          map(() =>
            recipeActions.deleteRecipeSuccess({
              recipeId: action.recipeId,
            })
          ),
          catchError((err) =>
            of(recipeActions.deleteRecipeError({ errorMessage: err }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private recipeApiService: MockApiService
  ) {}
}
