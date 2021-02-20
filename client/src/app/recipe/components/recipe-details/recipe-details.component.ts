import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Output() public addRecipe: EventEmitter<Recipe> = new EventEmitter();
  public recipe: Recipe;
  public recipeForm: FormGroup;
  public ingredients: Ingredient[] = [];
  public ingredientsFormControl = new FormControl('', Validators.required);
  public availableIngredients = INGREDIENTS;
  public selectedIngredients: Ingredient[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogService: DialogService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.newEntry) {
      this.InitForm();
    }
  }

  InitForm(): void {
    this.recipeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      source: [''],
      hours: [0],
      minutes: new FormControl(0, [Validators.required]),
      preparationInstructions: [''],
    });
  }

  AddIngredient(): void {
    const item = { ...this.ingredientsFormControl.value, quantity: 1 };
    this.selectedIngredients.push(item);
  }

  IngredientExists(): boolean {
    if (this.ingredientsFormControl.value) {
      const exists = this.selectedIngredients.filter(
        (item) => item.id === this.ingredientsFormControl.value.id
      );
      return exists.length > 0;
    } else {
      return false;
    }
  }

  Reset(): void {
    this.recipeForm.reset();
    this.selectedIngredients = [];
  }

  Exit(): void {
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

  RemoveIngredient(id: number): void {
    this.selectedIngredients = this.selectedIngredients.filter(
      (item) => item.id !== id
    );
  }

  UpdatedIngredient(ingredient: Ingredient): void {
    this.selectedIngredients = this.selectedIngredients.filter(
      (item) => item.id !== ingredient.id
    );
    this.selectedIngredients.push(ingredient);
  }

  Save(): void {
    if (this.recipeForm.valid && this.selectedIngredients.length > 0) {
      if (
        this.recipeForm.value.minutes === 0 &&
        this.recipeForm.value.hours === 0
      ) {
        this.snackBar.open('Preparation time cannot be 00:00!', '', {
          duration: 3000,
        });
      } else {
        const createdRecipe: Recipe = {
          name: this.recipeForm.value.name,
          source: this.recipeForm.value.source,
          ingredients: this.selectedIngredients,
          preparation: this.FormatPreporationTime(
            this.recipeForm.value.hours,
            this.recipeForm.value.minutes
          ),
          preparationInstructions: this.recipeForm.value
            .preparationInstructions,
        };

        this.addRecipe.emit(createdRecipe);
      }
    } else if (this.recipeForm.valid && this.selectedIngredients.length === 0) {
      this.snackBar.open('Please enter at least one ingredient!', '', {
        duration: 3000,
      });
    }
    this.ingredientsFormControl.markAllAsTouched();
    this.recipeForm.markAllAsTouched();
  }

  FormatPreporationTime(hours: number, minutes: number): string {
    if (hours === 0) {
      if (minutes < 10) {
        return `00:0${minutes}`;
      } else {
        return `00:${minutes}`;
      }
    } else {
      const formatedHour = hours < 10 ? `0${hours}` : `${hours}`;
      const formatedMiutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

      return `${formatedHour}:${formatedMiutes}`;
    }
  }
}
