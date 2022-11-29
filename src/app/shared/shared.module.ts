import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './pipe/search.pipe';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    CardsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CardsComponent,
    SearchPipe]
})

export class SharedModule { }
