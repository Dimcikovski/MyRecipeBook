import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MockApiService } from 'src/app/recipe-book-api/mock-api/mock-api.service';
import * as recipeActions from '../actions/recipe.actions';

@Injectable()
export class RecipeEffects {
  loadRecipeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(recipeActions.getRecipeList),
      switchMap((action) =>
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

  constructor(
    private actions$: Actions,
    private recipeApiService: MockApiService
  ) {}
}
