import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderrByPipe'
})
export class OrderrByPipePipe implements PipeTransform {
  transform(records: Array<any>, args?: any): any {
    var sortedArray: any[] = records.sort(function (a, b) {
      //console.log(args)//{property: "name", direction: 1}
      //console.log(a)//{id: 21, name: "Ganesh", fatherName: "Pulkit", motherName: "Khushboo", phone: 9811975601, …}
      // console.log(a[args.property],b[args.property])//Ganesh Fatima
      //If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first).
      //If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first).
      //If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other
      if (a[args.property] < b[args.property]) {
        return -1 * args.direction;
      }
      else if (a[args.property] > b[args.property]) {
        return 1 * args.direction;
      }
      else {
        return 0;
      }
    });
    return sortedArray;
  };
}
