import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnNameFilter'
})
export class ColumnNameFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
