import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeListComponent } from './containers/recipe-list/recipe-list.component';
import { RecipeListTableComponent } from './components/recipe-list-table/recipe-list-table.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeAddComponent } from './containers/recipe-add/recipe-add.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';
import { StoreModule } from '@ngrx/store';
import * as fromRecipe from './reducers/recipe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './effects/recipe.effects';
import { RecipeBookApiModule } from '../recipe-book-api/recipe-book-api.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeListTableComponent,
    RecipeAddComponent,
    RecipeDetailsComponent,
    RecipeIngredientComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RecipeBookApiModule,
    FormsModule,
    StoreModule.forFeature(fromRecipe.recipeFeatureKey, fromRecipe.reducer),
    EffectsModule.forFeature([RecipeEffects]),
  ],
  providers: [FormBuilder],
})
export class RecipeModule {}
