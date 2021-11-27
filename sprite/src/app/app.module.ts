import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SpriteComponent } from './sprite.component';
import { SpritePngComponent } from './sprite-png.component';

@NgModule({
  declarations: [SpriteComponent, SpritePngComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [SpriteComponent],
})
export class AppModule {}
