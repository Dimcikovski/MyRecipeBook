import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ingredient } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.scss'],
})
export class RecipeIngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;
  public quantity = new FormControl(1, [Validators.required]);

  constructor() {}

  ngOnInit(): void {}
}
