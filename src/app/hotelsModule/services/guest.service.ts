import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/Guest';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = 'http://imluft.azurewebsites.net/api/Guests'; //TODO: change url

  constructor(private http: HttpClient) {}

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }
}
