import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secs'
})
export class SecsPipe implements PipeTransform {

  transform(totalseconds: number): string {
    let prefix = '';
    if (totalseconds < 0) {
      totalseconds = Math.abs(totalseconds);
      prefix = '-';
    }
    const minutes: number = Math.floor(totalseconds / 60);
    const seconds: number = totalseconds % 60;
    return prefix + ('00'+minutes).slice(-2) + ':' + ('00'+seconds).slice(-2);
  }

}
