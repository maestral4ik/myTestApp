import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'TrackTime'
})
export class TrackTimePipe implements PipeTransform {
  transform(value: number, args?: any): string {       
    let sec = 60;
    let whole = Math.floor(value/sec)
    let fraction = value%60
    let fr = ('0'+fraction).slice(-2)
    return whole+':'+fr
  }
}
