import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const splitted = value.split(':');
    if (splitted[0] === '00') {
      return splitted[1];
    } else {
      return value;
    }
  }
}
