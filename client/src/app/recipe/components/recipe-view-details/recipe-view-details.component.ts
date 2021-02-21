import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-view-details',
  templateUrl: './recipe-view-details.component.html',
  styleUrls: ['./recipe-view-details.component.scss'],
})
export class RecipeViewDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  public recipeForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(): void {}
}
