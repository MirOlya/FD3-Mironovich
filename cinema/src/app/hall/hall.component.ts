import { Component, OnInit } from '@angular/core';
import { Tickets } from '../tickets.service';
import { TicketsEventsService } from '../tickets-events.service';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css'],
})
export class Hall implements OnInit {
  constructor(private myHall: Tickets, events: TicketsEventsService) {
    events.getSubject().subscribe((arrBuy: Array<boolean>) => {
      this.showBuyTicket(arrBuy);
    });
  }

  ngOnInit(): void {}

  showBuyTicket(mas: Array<boolean>) {
    console.log(mas);
  }
  getHall() {
    return this.myHall.getArrTickets();
  }
}
