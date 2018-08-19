import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataSearch'
})
export class DataSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
