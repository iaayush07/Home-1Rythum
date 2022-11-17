import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/home/image.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() data: any;

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
  }

}
