import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descslice'
})
export class DescslicePipe implements PipeTransform {

  transform(value: any, ...args: number[]): string {
    
    return value.slice(args[0], args[1]);
  }

}
