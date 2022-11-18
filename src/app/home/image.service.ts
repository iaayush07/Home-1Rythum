import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  //----------------
  public statusAvailable: Subject<boolean>;
  public status$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.statusAvailable = new Subject;
    this.status$ = this.statusAvailable.asObservable();
  }
  // getCarouselData(): Observable<any> {
  //   return this.http.get("http://localhost:3000/carosuel")
  // }
  getStuidoImage(): Observable<any> {
    return this.http.get("http://localhost:3000/studio")
  }
  getArtistImage(): Observable<any> {
    return this.http.get("http://localhost:3000/artist")
  }

  getArray(): Observable<any> {
    return this.http.get("http://localhost:3000/array")
  }
  // getImage():Observable<any>{
  //   return this.ht
  // }

  //------------------------




}
