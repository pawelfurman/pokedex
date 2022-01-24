import { Pipe, PipeTransform } from '@angular/core'

/**
 * Filters array of object based on the 'name' property, compering it to passed string value
 */
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterValue: string): any[] {
    return value.filter((item: any) => item.name.indexOf(filterValue) !== -1)
  }
}
