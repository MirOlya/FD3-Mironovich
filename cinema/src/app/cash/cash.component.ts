import { Component, OnInit, Input } from '@angular/core';
import { Tickets } from '../tickets.service';

@Component({
  selector: 'cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css'],
})
export class CashComponent {
  @Input('typeCash')
  public myType: boolean = true;

  public colTickets: number = 0;

  constructor(private myHall: Tickets) {}

  getType(): boolean {
    return this.myType;
  }

  buyTickets(): void {
    if (this.myHall.buyTickets(this.colTickets)) this.colTickets = 0;
  }
}
