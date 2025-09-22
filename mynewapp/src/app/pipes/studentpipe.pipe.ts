import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentpipe'
})
export class StudentpipePipe implements PipeTransform {

  transform(value: string,check:boolean): string {
     return  check? value.toLowerCase() : value.toUpperCase();
  }

}
