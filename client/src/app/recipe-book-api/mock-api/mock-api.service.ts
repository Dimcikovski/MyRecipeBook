import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/recipe/models/recipe.model';
import { environment } from 'src/environments/environment';
import { RecipeDTO } from './models/recipeDTO.model';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private SERVER_URL = environment.SERVER_URL;
  private headers = new HttpHeaders({ 'Content-type': 'application-json' });

  constructor(private http: HttpClient) {}

  CreateRecipe(recipe: Recipe): Observable<RecipeDTO> {
    return this.http.post<RecipeDTO>(`${this.SERVER_URL}/recipe`, recipe, {
      headers: this.headers,
    });
  }

  DeleteRecipe(recipeId: number): Observable<RecipeDTO> {
    return this.http.post<RecipeDTO>(`${this.SERVER_URL}/recipe/${recipeId}`, {
      headers: this.headers,
    });
  }

  GetAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.SERVER_URL}/recipe-list`, {
      headers: this.headers,
    });
  }
}
