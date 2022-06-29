import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: String, size: number = 12, suffix: string = '...'): String {
    if (text.length > size) {      
      let truncated: String = new String(`${text.substring(0, size)}${suffix}`);
      return truncated;
    }

    return text;
  }

}
