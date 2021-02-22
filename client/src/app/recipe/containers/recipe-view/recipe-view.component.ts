import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { deleteRecipe } from '../../actions/recipe.actions';
import { Recipe } from '../../models/recipe.model';
import { getRecipeDetails } from '../../reducers';
import { RecipeState } from '../../reducers/recipe.reducer';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit, OnDestroy {
  public recipe: Recipe;
  private componentActive = true;

  constructor(
    private store: Store<RecipeState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const intId = parseInt(id, 10);
    // this.recipe$ = this.store.select(getRecipeDetails, { id: intId });
    this.store
      .pipe(
        select(getRecipeDetails, { id: intId }),
        takeWhile(() => this.componentActive)
      )
      .subscribe((recipe) => {
        if (recipe) {
          this.recipe = recipe;
        } else {
          // this.router.navigate(['recipe/list']);
        }
      });
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  DeleteRecipe(id: number): void {
    this.store.dispatch(deleteRecipe({ recipeId: id }));
  }
}
