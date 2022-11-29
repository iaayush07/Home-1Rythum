import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/home/image.service';
import { artistData } from '../artist.model';

@Component({
  selector: 'app-artist-description',
  templateUrl: './artist-description.component.html',
  styleUrls: ['./artist-description.component.scss']
})
export class ArtistDescriptionComponent implements OnInit {

  public id: string;
  public artist: any;
  public params: any;

  constructor(private artistService: ImageService, private route: ActivatedRoute) {
    // console.log(route);
    this.id = '';
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params);
      // this.getArtistDetails();
    })
    // this.route.queryParamMap.subscribe(params => {
    //   console.log(params);

    //   this.params = params
    // });
  }

  ngOnInit(): void {
    this.getArtistDetails();
  }

  public getArtistDetails() {
    this.artistService.getArtistById(Number(this.id)).subscribe((response: artistData[]) => {
      console.log(response);
      this.artist = response;
    })
  }
}
