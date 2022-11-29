import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistService } from './services/artist.service';
import { StudioService } from '../studio/services/studio.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArtistDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArtistDetailsComponent
  ],
  providers: [
    ArtistService,
    StudioService
  ]
})
export class ArtistModule { }
