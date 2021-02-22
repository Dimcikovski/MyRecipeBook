import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRecipeList } from 'src/app/recipe/actions/recipe.actions';
import { RecipeState } from 'src/app/recipe/reducers/recipe.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private store: Store<RecipeState>) {}

  ngOnInit(): void {
    this.store.dispatch(getRecipeList());
  }
}
