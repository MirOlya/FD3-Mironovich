import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sprite-png',
  templateUrl: 'sprite-png.component.html',
  styleUrls: ['sprite-png.component.css'],
})
export class SpritePngComponent {
  //url, offset-x, offset-y, width, height

  @Input('sprite-url')
  public spriteurl: string;
  @Input('sprite-x')
  public spritex: number;
  @Input('sprite-y')
  public spritey: number;
  @Input('sprite-w')
  public spriteWidth: number;
  @Input('sprite-h')
  public spriteHeight: number;

  @Output('spriteoutput')
  private spriteOutputEE = new EventEmitter<void>();

  getUrl(): string {
    return 'url(' + this.spriteurl + ')';
  }
  getX(): number {
    return this.spritex;
  }
  getY(): number {
    return this.spritey;
  }
  getW(): number {
    return this.spriteWidth;
  }
  getH(): number {
    return this.spriteHeight;
  }

  setSprite(): void {
    this.spriteOutputEE.emit();
  }
}
