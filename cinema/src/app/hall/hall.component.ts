import { Component, OnInit } from '@angular/core';
import { Tickets } from '../tickets.service';

@Component({
  selector: 'hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css'],
})
export class Hall implements OnInit {
  constructor(private myHall: Tickets) {}

  ngOnInit(): void {}

  getHall() {
    return this.myHall.getArrTickets();
  }
}
