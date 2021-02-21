import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteRecipe, getRecipeList } from '../../actions/recipe.actions';
import { Recipe } from '../../models/recipe.model';
import { RecipeState } from '../../reducers/recipe.reducer';
import { takeWhile } from 'rxjs/operators';
import { getRecipeCallState, getRecipesList } from '../../reducers';
import { LoadingState } from 'src/app/shared/models/state.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipeList$: Observable<Recipe[]>;
  public componentActive = true;

  constructor(
    private store: Store<RecipeState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipeList$ = this.store.pipe(
      select(getRecipesList),
      takeWhile(() => this.componentActive)
    );

    this.ListenForStateChanges();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ListenForStateChanges(): void {
    this.store
      .pipe(
        select(getRecipeCallState),
        takeWhile(() => this.componentActive)
      )
      .subscribe((state) => {
        if (state === LoadingState.ERROR) {
          this.snackBar.open('Could not load recipe list', '', {
            duration: 3000,
          });
        }
      });
  }

  DeleteRecipe(id: number) {
    this.store.dispatch(deleteRecipe({ recipeId: id }));
  }
}
