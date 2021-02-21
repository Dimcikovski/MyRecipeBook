import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../models/recipe.model';

@Pipe({
  name: 'ingredientsView',
})
export class IngredientsViewPipe implements PipeTransform {
  transform(value: Ingredient[]): string {
    if (value.length > 3) {
      return this.FormatIngredients(value, true);
    } else {
      return this.FormatIngredients(value);
    }
  }

  FormatIngredients(ingredients: Ingredient[], elipsis = false): string {
    const stringRepresentation = [];
    if (elipsis) {
      const arraySlice = ingredients.slice(0, 3);

      arraySlice.forEach((element) => {
        stringRepresentation.push(`${element.name}`);
      });

      stringRepresentation.push('...');
    } else {
      ingredients.forEach((element) => {
        stringRepresentation.push(`${element.name}`);
      });
    }

    return stringRepresentation.toString();
  }
}
