import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { getRecipeDetails } from '../../reducers';
import { RecipeState } from '../../reducers/recipe.reducer';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
})
export class RecipeViewComponent implements OnInit {
  public recipe$: Observable<Recipe>;

  constructor(
    private store: Store<RecipeState>,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const intId = parseInt(id, 10);
    this.recipe$ = this.store.select(getRecipeDetails, { id: intId });
  }
}
