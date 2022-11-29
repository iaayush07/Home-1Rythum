import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';
import { MasterComponent } from './core/master/master.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home', component: HomeComponent
    },
    { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
    { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
