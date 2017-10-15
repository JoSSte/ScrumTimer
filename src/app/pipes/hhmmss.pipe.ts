import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'Seconds'})
export class SecondsPipe implements PipeTransform {
  transform(totalseconds: number): string {
    var minutes: number = Math.floor(totalseconds / 60);
    var seconds: number = totalseconds % 60;    
    
    return ("00"+minutes).slice(-2) + ":" + ("00"+seconds).slice(-2);
  }
}