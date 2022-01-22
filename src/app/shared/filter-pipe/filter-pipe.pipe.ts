import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterValue: string): any[] {
    return value.filter((item: any) => item.name.indexOf(filterValue) !== -1);
  }

}
