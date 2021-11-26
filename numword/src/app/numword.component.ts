import { Component } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'numword',
  templateUrl: 'numword.component.html',
  styleUrls: ['numword.component.css'],
})
export class NumwordComponent {
  title = 'numword';
  public num: number = 0;

  myChange(ev: Event) {
    const n: any = (<HTMLInputElement>ev.target).value;
    return <number>n;
  }
}
