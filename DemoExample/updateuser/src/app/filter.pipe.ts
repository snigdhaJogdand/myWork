import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, search?: any): any {
    if (search == undefined) {
      return data;
    }
    else {
      return data.filter((elements) => {
        return elements.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }

}
