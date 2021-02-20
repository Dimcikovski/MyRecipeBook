import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { LoadingState } from 'src/app/shared/models/state.models';
import { addRecipe } from '../../actions/recipe.actions';
import { Recipe } from '../../models/recipe.model';
import { getRecipeCallState } from '../../reducers';
import { RecipeState } from '../../reducers/recipe.reducer';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss'],
})
export class RecipeAddComponent implements OnInit, OnDestroy {
  // public recipeList$: Observable<Recipe[]>;
  public componentActive = true;

  constructor(
    private store: Store<RecipeState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ListenForStateChanges();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  AddRecipe(recipe: Recipe): void {
    console.log(recipe);
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
  }
}
