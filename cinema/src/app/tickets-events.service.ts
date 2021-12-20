import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TicketsEventsService {
  private events$: Subject<Array<boolean>>;

  constructor() {
    this.events$ = new Subject<Array<boolean>>();
  }

  getSubject(): Subject<Array<boolean>> {
    return this.events$;
  }
}
