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
    if (this.colTickets > 0) {
      const isBuyTicket = this.myHall.buyTickets(this.colTickets);
      if (isBuyTicket.length > 0) {
        this.colTickets = 0;
        alert('Купили места:' + isBuyTicket.join(','));
      } else alert('недостаточно свободных мест!!!');
    }
  }
}
