import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ingredient } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.scss'],
})
export class RecipeIngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;

  @Output() removeIngredient: EventEmitter<number> = new EventEmitter();
  @Output() updatedIngredient: EventEmitter<Ingredient> = new EventEmitter();

  public quantity = new FormControl(1, [
    Validators.required,
    Validators.min(1),
  ]);

  constructor() {}

  ngOnInit(): void {
    this.quantity.setValue(this.ingredient.quantity);
  }

  RemoveIngredient(): void {
    this.removeIngredient.emit(this.ingredient.id);
  }

  UpdateQuantity(): void {
    const updatedIngredient: Ingredient = {
      ...this.ingredient,
      quantity: this.quantity.value !== null ? this.quantity.value : 1,
    };

    this.updatedIngredient.emit(updatedIngredient);
  }
}
