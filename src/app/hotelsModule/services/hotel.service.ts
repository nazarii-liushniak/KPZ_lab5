import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../interfaces/Hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://imluft.azurewebsites.net/api/Hotels'; //TODO: change url

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
