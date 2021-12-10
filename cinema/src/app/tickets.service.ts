import { Injectable } from '@angular/core';

@Injectable()
export class Tickets {
  //private arrTickets: { isFree: boolean; num: number }[] = [];
  //private arrTickets: Array<{ isFree: boolean; num: number }> = [];
  private arrTickets: Array<{ isFree: boolean; num: number }> = [];

  initArrTickets(countTickets: number) {
    for (let i = 0; i < countTickets; i++)
      this.arrTickets[i] = { isFree: true, num: i + 1 };
  }

  getArrTickets(): Array<{ isFree: boolean; num: number }> {
    return this.arrTickets;
  }

  buyTickets(colT: number): Array<number> {
    let countBuyTickets = colT;
    let newArrTickets = [];
    for (let i = 0; i < this.arrTickets.length; i++)
      newArrTickets[i] = {
        isFree: this.arrTickets[i].isFree,
        num: this.arrTickets[i].num,
      };
    const isArrBuyTickets: Array<number> = [];
    for (let i = 0; i < newArrTickets.length; i++)
      if (newArrTickets[i].isFree) {
        newArrTickets[i].isFree = false;
        isArrBuyTickets.push(newArrTickets[i].num);
        countBuyTickets--;
        if (countBuyTickets === 0) break;
      }
    if (countBuyTickets === 0) this.arrTickets = newArrTickets;
    else {
      return [];
    }
    return isArrBuyTickets;
  }
}
