import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/home/image.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() data: any;
  message: string;
  sta: boolean;

  public id: number;
  constructor(private imgService: ImageService) {
    this.data = [];
    this.id = 1;

    //---
    this.message = "temperory closed";
    this.sta = false;
  }

  ngOnInit(): void {
    this.imgService.statusAvailable.subscribe((res) => {
      this.sta = res;
      if (res === true) {
        this.message = this.data['eventDescription']
      }
      else {
        this.message = "temperory closed"
      }
    })
  }


}
