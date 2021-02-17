import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Ingredient, Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() public newEntry: boolean;
  public recipe: Recipe;
  public recipeForm: FormGroup;
  public ingredients: Ingredient[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.newEntry) {
      this.InitForm();
    }
  }

  InitForm() {
    this.recipeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      // source: [''],
      // preparation: ['', Validators.required],
      // preparationInstructions: [''],
    });
  }

  AddIngredient() {}
}
