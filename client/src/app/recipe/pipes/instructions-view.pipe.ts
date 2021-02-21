import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instructionsView',
})
export class InstructionsViewPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 50) {
      return value;
    } else {
      const splitedArray = value.split(' ');
      let shouldSkip = false;
      let modifiedInstructions = '';
      let finalString = '';

      splitedArray.forEach((element) => {
        modifiedInstructions += `${element} `;
        if (modifiedInstructions.length > 50 && !shouldSkip) {
          modifiedInstructions += '...';
          finalString = modifiedInstructions.slice();
          shouldSkip = true;
        }
      });
      return finalString;
    }
  }
}
