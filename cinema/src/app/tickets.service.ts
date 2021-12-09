import { Injectable } from '@angular/core';

@Injectable()
export class Tickets {
  private arrTickets: Array<any> = [];

  initArrTickets(countTickets: number) {
    for (let i = 0; i < countTickets; i++)
      this.arrTickets[i] = { isFree: true, num: i + 1 };
  }

  getArrTickets() {
    const newArrTickets = this.arrTickets.slice();
    return newArrTickets;
  }

  buyTickets(colT: number): boolean {
    let countBuyTickets = colT;
    let newArrTickets = [];
    for (let i = 0; i < this.arrTickets.length; i++)
      newArrTickets[i] = {
        isFree: this.arrTickets[i].isFree,
        num: this.arrTickets[i].num,
      };

    for (let i = 0; i < newArrTickets.length; i++)
      if (newArrTickets[i].isFree) {
        newArrTickets[i].isFree = false;
        countBuyTickets--;
        if (countBuyTickets === 0) break;
      }
    if (countBuyTickets === 0) this.arrTickets = newArrTickets;
    else {
      alert('недостаточно свободных мест!!!');
      return false;
    }
    return true;
  }
}
