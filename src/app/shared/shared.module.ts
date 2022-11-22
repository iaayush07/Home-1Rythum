import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SearchPipe } from './pipe/search.pipe';



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
