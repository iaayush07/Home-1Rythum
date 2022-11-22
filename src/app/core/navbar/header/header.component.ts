import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { user } from 'src/app/home.model';
import { ImageService } from 'src/app/home/image.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public status: boolean;
  public searchBoxText: any;
  public Form: FormGroup;
  public userDetail: any;
  public userId: any;

  // public statusAvailable!: Subject<any>;

  constructor(private imgService: ImageService, private fb: FormBuilder) {
    this.status = false;
    this.Form = this.fb.group({
      searchinput: ['', [Validators.required, Validators.minLength(2)]]
    })
    // this.searchBoxText = ''
  }

  ngOnInit(): void {
    this.getUserDetail();
    localStorage.setItem("userDetailId", "1")
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

  getUserDetail() {
    // const userId = localStorage.getItem("1");

    this.imgService.getuserDetail().subscribe((res: user[]) => {
      this.userId = res.find(item =>
        item.userDetailId == 1
      )
    })
  }


}
