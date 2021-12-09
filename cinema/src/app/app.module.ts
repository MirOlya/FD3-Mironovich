import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Cinema } from './cinema.component';
import { Tickets } from './tickets.service';
import { Hall } from './hall/hall.component';
import { CashComponent } from './cash/cash.component';

import { FormsModule } from '@angular/forms';

let heartTickets: Tickets = new Tickets();
heartTickets.initArrTickets(25);

@NgModule({
  declarations: [Cinema, Hall, CashComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: Tickets, useValue: heartTickets }],
  bootstrap: [Cinema],
})
export class AppModule {}
