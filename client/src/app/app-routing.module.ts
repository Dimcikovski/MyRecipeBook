import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipe/recipe.module').then((m) => m.RecipeModule),
  },
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
