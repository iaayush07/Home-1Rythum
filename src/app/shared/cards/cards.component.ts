import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/home.model';
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
  userId: any;


  public id: number;
  constructor(private imgService: ImageService) {
    this.data = [];
    this.id = 1;


    //---
    this.message = "temperory closed";
    this.sta = false;


  }

  ngOnInit(): void {
    this.status();
    // this.getUserDetail();
  }

  status() {
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

  getUserDetail() {
    // const userId = localStorage.getItem("1");

    this.imgService.getArray().subscribe((res: user[]) => {
      // console.log(res);

      this.userId = res.find((item: any) =>
        item.id == 8
      )
      // this.status();
      // console.log(this.userId);
    })
  }


}
