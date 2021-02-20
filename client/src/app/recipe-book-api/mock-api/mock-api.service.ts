import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private SERVER_URL = environment.SERVER_URL;
  private headers = new HttpHeaders({ 'Content-type': 'application-json' });

  constructor(private http: HttpClient) {}

  CreateRecipe(recipe: Recipe) {
    return this.http.post(`${this.SERVER_URL}/recipe`, recipe, {
      headers: this.headers,
    });
  }

  DeleteRecipe(recipeId: number) {
    return this.http.post(`${this.SERVER_URL}/recipe/${recipeId}`, {
      headers: this.headers,
    });
  }

  GetAllRecipes() {
    return this.http.get(`${this.SERVER_URL}/recipe/list`, {
      headers: this.headers,
    });
  }
}
