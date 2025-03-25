import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../interfaces/Booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://imluft.azurewebsites.net/api/Bookings'; //TODO: change url

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }
}
