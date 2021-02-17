import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeListComponent } from './containers/recipe-list/recipe-list.component';
import { RecipeListTableComponent } from './components/recipe-list-table/recipe-list-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RecipeListComponent, RecipeListTableComponent],
  imports: [CommonModule, RecipeRoutingModule, SharedModule],
})
export class RecipeModule {}
