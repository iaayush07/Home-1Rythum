import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SearchPipe } from './shared/pipe/search.pipe';
import { HomeComponent } from './home/home.component';
import { ArtistService } from './artist/services/artist.service';
import { StudioService } from './studio/services/studio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    ArtistService,
    StudioService,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
