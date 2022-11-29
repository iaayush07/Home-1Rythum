import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistService } from './services/artist.service';
import { StudioService } from '../studio/services/studio.service';



@NgModule({
  declarations: [
    ArtistDetailsComponent
  ],
  imports: [
    CommonModule
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
