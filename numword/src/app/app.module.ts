import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { NumwordPipe } from './numword.pipe';
import { NumwordComponent } from './numword.component';

@NgModule({
  declarations: [NumwordComponent, NumwordPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [NumwordComponent],
})
export class AppModule {}
