import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/home/image.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public id: string;

  constructor(private artistService: ImageService, private route: ActivatedRoute) {
    this.id = '';
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getArtistDetails();
    })
  }

  ngOnInit(): void {
  }

  public getArtistDetails() {
    this.artistService.getArtistById(Number(this.id)).subscribe((artist) => {
      console.log(artist);

    })
  }

}
