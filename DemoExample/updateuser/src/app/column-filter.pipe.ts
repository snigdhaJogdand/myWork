import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {

  transform(data: any): any {
    var sortedArray: any[] = data.sort((n1, n2) => {
      if (n1.email.toLowerCase() > n2.email.toLowerCase()) {
        return 1;
      }
      if (n1.email.toLowerCase() < n2.email.toLowerCase()) {
        return -1;
      }
      // To sort name of Students. 
      // if (n1.name.toLowerCase() > n2.name.toLowerCase()) {
      //   return 1;
      // }
      // if (n1.name.toLowerCase() < n2.name.toLowerCase()) {
      //   return -1;
      // }

      return 0;
    });
    return sortedArray;
    // return data;
  }
}
