import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numword',
  pure: true,
})
export class NumwordPipe implements PipeTransform {
  transform(n: any, w1: string, w2: string, w3: string): string {
    if (n === 0) return '';
    let ww: string = 'У вас ' + n + ' ';
    var dd = n % 100;
    if (dd >= 11 && dd <= 19) return ww + w3;
    var d = n % 10;
    if (d == 1) return ww + w1;
    if (d >= 2 && d <= 4) return ww + w2;
    return ww + w3;
  }
}
