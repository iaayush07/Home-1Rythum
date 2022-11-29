import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistModule } from '../artist/artist.module';


@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbCarouselModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FormsModule,
    ArtistModule
  ],
  exports: [
    MasterComponent, HeaderComponent, NgbModule
  ]
})
export class CoreModule { }
