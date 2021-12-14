import { ThrowStmt } from '@angular/compiler';
import { Directive, HostBinding, HostListener, Attribute } from '@angular/core';

@Directive({
  selector: '[sprite]',
})
export class SpriteDirective {
  constructor(
    @Attribute('sprite-url')
    private url: string,
    @Attribute('sprite-x') private x: number = 0,
    @Attribute('sprite-y') private y: number = 0,
    @Attribute('sprite-w') private w: number = 25,
    @Attribute('sprite-h') private h: number = 25
  ) {}

  ngAfterViewInit(): void {
    this.w = this.w === null ? 25 : this.w;
    this.h = this.h === null ? 25 : this.h;
  }

  // привязываем стилевое свойсто хост-компонента (родителя)
  @HostBinding('style.backgroundImage')
  private hostBgUrl: string =
    'url(' + 'http://fe.it-academy.by/Examples/smileys.png' + ')';
  @HostBinding('style.background-position-x.px')
  private hostBgX: number = 0;
  @HostBinding('style.background-position-y.px')
  private hostBgY: number = 0;
  @HostBinding('style.width.px')
  private hostBgW: number = 25;
  @HostBinding('style.height.px')
  private hostBgH: number = 25;

  // обработчиком события click у хост-компонента будет этот метод
  @HostListener('click')
  setNewUrl(): void {
    let x1: number = this.x * 1;
    let y1: number = this.y * 1;
    let w1: number = this.w * 1;
    let h1: number = this.h * 1;
    if (x1 > w1 * -4) x1 += -w1;
    else {
      x1 = 0;
      y1 += -h1;
    }
    if (y1 < -h1 * 3) y1 = 0;
    this.x = x1;
    this.y = y1;

    this.hostBgX = this.x;
    this.hostBgY = this.y;
    this.hostBgW = this.w;
    this.hostBgH = this.h;
  }
}
