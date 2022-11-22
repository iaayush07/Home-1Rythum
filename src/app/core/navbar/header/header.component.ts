import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ImageService } from 'src/app/home/image.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public status: boolean;
  public searchBoxText: any;
  public Form: FormGroup

  // public statusAvailable!: Subject<any>;

  constructor(private imgService: ImageService, private fb: FormBuilder) {
    this.status = false;
    this.Form = this.fb.group({
      searchinput: ['', [Validators.required, Validators.minLength(2)]]
    })
    // this.searchBoxText = ''
  }

  ngOnInit(): void {
  }
  onStatus() {
    this.status = !this.status;
    this.imgService.statusAvailable.next(this.status);
    // console.log(this.status);

    // this.statusAvailable.next(this.status)

  }

  onSearch() {
    this.imgService.searchBox.next(this.searchBoxText);
  }


}
