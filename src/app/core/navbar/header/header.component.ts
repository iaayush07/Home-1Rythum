import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageService } from 'src/app/home/image.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public status: boolean;

  // public statusAvailable!: Subject<any>;

  constructor(private imgService: ImageService) {
    this.status = false;
  }

  ngOnInit(): void {
  }
  onStatus() {
    this.status = !this.status;
    this.imgService.statusAvailable.next(this.status);
    // console.log(this.status);

    // this.statusAvailable.next(this.status)
  }

}
