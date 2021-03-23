import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma'
})

export class ReplaceComma implements PipeTransform {

  transform(value: string): string {
    if (!!value) {
      //remplacer les virgules par un point
      return value.replace(/,/g, ".");
    } else {
      //aucune transformation
      return "";
    }
  }

}
