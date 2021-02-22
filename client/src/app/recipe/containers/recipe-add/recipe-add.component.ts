import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { LoadingState } from 'src/app/shared/models/state.models';
import { addRecipe } from '../../actions/recipe.actions';
import { Recipe } from '../../models/recipe.model';
import { getRecipeCallState, getRecipeListLength } from '../../reducers';
import { RecipeState } from '../../reducers/recipe.reducer';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss'],
})
export class RecipeAddComponent implements OnInit, OnDestroy {
  public componentActive = true;
  private recipeListLength = 0;
  private synchedLength = false;
  constructor(
    private store: Store<RecipeState>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ListenForStateChanges();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  AddRecipe(recipe: Recipe): void {
    this.store.dispatch(addRecipe({ recipeModel: recipe }));
  }

  ListenForStateChanges(): void {
    this.store
      .pipe(
        select(getRecipeCallState),
        takeWhile(() => this.componentActive)
      )
      .subscribe((state) => {
        if (state === LoadingState.ERROR) {
          this.snackBar.open('Failed to add recipe! ', '', {
            duration: 3000,
          });
        }
      });

    this.store
      .pipe(
        select(getRecipeListLength),
        takeWhile(() => this.componentActive)
      )
      .subscribe((recipeListLength) => {
        if (!this.synchedLength) {
          this.recipeListLength = recipeListLength;
          this.synchedLength = true;
        } else {
          if (this.recipeListLength !== recipeListLength) {
            this.snackBar.open('Succesfully added recipe!', '', {
              duration: 5000,
            });
            this.router.navigate(['recipe/list']);
          }
        }
      });
  }
}
