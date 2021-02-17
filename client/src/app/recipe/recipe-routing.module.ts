import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeAddComponent } from './containers/recipe-add/recipe-add.component';
import { RecipeListComponent } from './containers/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: 'list', component: RecipeListComponent },
  { path: 'new', component: RecipeAddComponent },
  { path: 'details/:id', component: RecipeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
