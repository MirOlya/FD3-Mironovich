import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

import { Cinema } from './cinema.component';
import { Tickets } from './tickets.service';
import { TicketsEventsService } from './tickets-events.service';
import { Hall } from './hall/hall.component';
import { CashComponent } from './cash/cash.component';

import { FormsModule } from '@angular/forms';

let n = new TicketsEventsService();
let heartTickets: Tickets = new Tickets(n);
heartTickets.initArrTickets(25);

@NgModule({
  declarations: [Cinema, Hall, CashComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    TicketsEventsService,
    { provide: Tickets, useValue: heartTickets },
  ],
  bootstrap: [Cinema],
})
export class AppModule {}
