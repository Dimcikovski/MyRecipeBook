import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Ingredient, INGREDIENTS, Recipe } from '../../models/recipe.model';

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
  public ingredientsFormControl = new FormControl('', Validators.required);
  public availableIngredients = INGREDIENTS;
  public selectedIngredients: Ingredient[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    if (this.newEntry) {
      this.InitForm();
    }
  }

  InitForm() {
    this.recipeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      source: [''],
      preparation: ['', Validators.required],
      preparationInstructions: [''],
    });
  }

  AddIngredient() {
    console.log(this.ingredientsFormControl.value);
    let item = { ...this.ingredientsFormControl.value };
    this.selectedIngredients.push(item);
  }

  IngredientExists() {
    return false;
  }

  Reset() {
    this.recipeForm.reset();
    this.selectedIngredients = [];
  }

  Exit() {
    this.dialogService
      .OpenConfirmDialog(
        'Are you sure you want to exit recipe creation ?',
        'Yes',
        'No'
      )
      .then((result) => {
        if (result.confirm) {
          this.router.navigate(['/recipe/list']);
        }
      });
  }
}
