import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from './image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public artistFiveData: any = [];
  public lastArtistImage: any = []
  public mergeImage: any = []
  public artistAllData: any = []
  public lastFiveData: any = []
  public artisFiveData: any = []
  public arrayImage: any = []
  public finalImage: any = []

  //--------------------------
  public carosuelFourImage: any = []
  public studioTwoImage: any = []
  public artistTwoImage: any = []
  public studioFiveData: any = []
  // studio: TemplateRef<NgIfContext<any>>|null;


  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig, private imageservice: ImageService) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit(): void {
    this.CarouselData();
    this.artistData();
    this.studioData();
    this.getArray();

    // this.imageservice.statusAvailable.subscribe((res) => {
    //   console.log(res);
    // })
  }


  CarouselData() {
    this.imageservice.getStuidoImage().subscribe(res => {
      this.studioTwoImage = res.slice(-2).reverse();

      this.imageservice.getArtistImage().subscribe(res => {
        // get last-two ArtistData from Database
        this.artistTwoImage = res.slice(-2).reverse();
        // this.artistAllData = res.slice((res.length - 2), res.length).reverse();

        // this.lastArtistImage = this.artistAllData.slice((this.artistAllData.length - 2), this.artistAllData.length).reverse();

        // merge twoArray to show Both Data

        this.mergeImage = (this.studioTwoImage.concat(this.artistTwoImage));
      })

    })
  }
  artistData() {
    this.imageservice.getArtistImage().subscribe((res) => {
      this.artistFiveData = res.slice(-5).reverse();
    })
    // console.log(this.carouselAllData['img']);
  }

  studioData() {
    this.imageservice.getArtistImage().subscribe(res => {
      this.studioFiveData = res.slice(-5).reverse();
    })
  }

  getArray() {
    this.imageservice.getArray().subscribe(res => {
      // console.log(res);

      this.arrayImage = res.slice(-5).reverse().filter((item: any) => {
        // console.log(item);

        const img = item.img;
        // console.log(img);

        return img.map((image: any) => {
          // console.log(image);

          this.finalImage = image.img1
          // console.log(this.finalImage);
        })
      })
    })
  }

}
