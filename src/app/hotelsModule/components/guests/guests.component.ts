import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../interfaces/Guest';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  isModalOpen = false;
  guests: Guest[] = [];

  constructor(private guestService: GuestService) {}

  ngOnInit(): void {
    this.fetchGuests();
  }

  fetchGuests(): void {
    this.guestService.getGuests().subscribe((data) => {
      this.guests = data;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSaveGuest(newGuest: Guest) {
    this.guests.push(newGuest);
    this.closeModal();
  }
}
