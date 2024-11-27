import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/Hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  isModalOpen = false;
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.fetchGuests();
  }

  fetchGuests(): void {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSaveHotel(newHotel: Hotel) {
    this.hotels.push(newHotel);
    this.closeModal();
  }
}
