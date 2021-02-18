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
    FormsModule,
  ],
  providers: [FormBuilder],
})
export class RecipeModule {}
