import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  getCarouselData() {
    return this.http.get("http://localhost:3000/carosuel")
  }
}
