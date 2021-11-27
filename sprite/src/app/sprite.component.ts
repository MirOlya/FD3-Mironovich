import { Component } from '@angular/core';

@Component({
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css'],
})
export class SpriteComponent {
  title = 'sprite';
  private url: string = 'http://fe.it-academy.by/Examples/cards2.png';
  private x: number = 0;
  private y: number = 0;
  private w: number = 142;
  private h: number = 194;

  getUrlSprite() {
    return this.url;
  }
  getXSprite() {
    return this.x;
  }
  getYSprite() {
    return this.y;
  }
  getWSprite() {
    return this.w;
  }
  getHSprite() {
    return this.h;
  }

  setSprite() {
    if (this.x < this.w * 3) this.x += this.w;
    else {
      this.x = 0;
      this.y += -this.h;
    }
    if (this.y < -this.h * 13) this.y = 0;
  }
}
