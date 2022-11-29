import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { artistData } from '../artist/artist.model';
import { ArtistService } from '../artist/services/artist.service';
import { StudioService } from '../studio/services/studio.service';
import { studio } from '../studio/studio.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userTypeData: [];
  public artistRecentSixData: any;
  public studioRecentSixData: any;
  public studioRecentData: any
  public artistRecentData: any;
  public carouselData: any;

  public userTypeId!: any;

  //------------
  public showArtist: boolean;
  public showStudio: boolean;

  constructor(private studioService: StudioService, private artistService: ArtistService, private router: Router) {
    this.userTypeData = [];
    // this.artistRecentSixData = [];
    this.studioRecentSixData = [];

    //-show artist and studio
    this.showArtist = false
    this.showStudio = false
  }

  ngOnInit(): void {
    this.showStudioAndArtist();
    this.getStudioData();
    this.getArtistData();
    // this.getCarouselData();

    //----fake-localstorage
    localStorage.setItem("userTypeId", "3");
    this.userTypeId = localStorage.getItem("userTypeId")
  }

  /**
   * @author : Ayush Dhimmar
   * show and hide studio and artist functionality according to userTypeId
   */
  showStudioAndArtist() {
    if (this.userTypeId == 1) {
      this.showArtist = true;
    }
    else if (this.userTypeId == 2) {
      this.showStudio = true;
    }
    else if (this.userTypeId == 3) {
      this.showArtist = true;
      this.showStudio = true
    }
  }
  /**
   * @author : Ayush Dhimmar
 * get recently added six data of artist
 */
  getArtistData() {
    this.artistService.getArtistData().subscribe((response: artistData[]) => {
      console.log(response);

      this.artistRecentSixData = response
        .map(item => {
          return {
            id: item.artistId,
            name: item.artistName,
            description: item.artistType,
            images: item.artistImages,
            typeId: 2
          }
        }).slice(0, 6);
    })
  }

  /**
  /** 
   * @author : Charvi Sarang
   * Get recently added six data of studio 
   */
  getStudioData() {
    this.studioService.getStudioData().subscribe((result: studio[]) => {
      console.log(result);

      this.studioRecentSixData = result.map(item => {
        return {
          id: item.studioId,
          name: item.studioName,
          description: item.studioAddress,
          images: item.studioImage,
          typeId: 1
        }
      }).slice(0, 6);
    });
  }
  /**
   * to show data in carousel according to the usertype
   */
  // getCarouselData() {
  //   //---- Get recently added data of studio -----//
  //   this.studioService.getStudioData().subscribe((res: studio[]) => {
  //     this.studioRecentData = res.map(item => {
  //       return {
  //         image: item.studioImage,
  //         description: item.studioAddress,
  //         name: item.studioName,
  //         role: "STUDIO"
  //       }
  //     });
  //     //---- Get recently added data of artist -----//
  //     this.artistService.getArtistData().subscribe((res: artistData[]) => {
  //       this.artistRecentData = res.map(item => {
  //         return {
  //           // image: item.artistImages,
  //           // description: item.artistDescription,
  //           name: item.artistName,
  //           role: "ARTIST"
  //         }
  //       });

  //       /**
  //        *   toshow the data according the different type of user
  //        */
  //       if (this.userTypeId == 1) {
  //         this.carouselData = this.artistRecentData.slice(-4).reverse()
  //       }
  //       else if (this.userTypeId == 2) {
  //         this.carouselData = this.studioRecentData.slice(-4).reverse()
  //       }
  //       else if (this.userTypeId == 3) {
  //         this.carouselData = ((this.studioRecentData.slice(-2).reverse()).concat(this.artistRecentData.slice(-2).reverse()))
  //       }
  //     })
  //   })
  // }

  /** 
     * @author : Charvi Sarang
     * Get recently added six data of studio 
     */
  // Navigating the Studio-List Page
  onStudioList() {
    this.router.navigate(["studio/studio-list"]);
  }
  // Navigating the Artist-List Page
  onArtistList() {
    this.router.navigate(["artist/artist-list"]);
  }
}
