import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterColorName:string): Color[] {
    filterColorName=filterColorName?filterColorName.toLocaleLowerCase():"";
    return filterColorName?value.filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterColorName)!==-1):value;
  }

}
