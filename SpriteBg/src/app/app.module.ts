import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpriteBgComponent } from './spriteBg.component';
import { SpriteDirective } from './spriteBg.attr.directive';

@NgModule({
  declarations: [SpriteBgComponent, SpriteDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SpriteBgComponent],
})
export class AppModule {}
