import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { artistData } from '../artist.model';

@Injectable()
export class ArtistService {

  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }

  /**
   * @author : Ayush Dhimmar
   * get all artist data;
   * @returns artistData : array
   */
  getArtistData(): Observable<artistData[]> {
    const url = this.baseUrl + "artist";
    return this.http.get<artistData[]>(url);
  }
}

