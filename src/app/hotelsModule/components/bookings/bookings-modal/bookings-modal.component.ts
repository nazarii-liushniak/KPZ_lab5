import { Component, EventEmitter, Output } from '@angular/core';
import { Booking } from '../../../interfaces/Booking';

@Component({
  selector: 'app-bookings-modal',
  templateUrl: './bookings-modal.component.html',
  styleUrls: ['./bookings-modal.component.scss'],
})
export class BookingsModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveBooking = new EventEmitter<Booking>();

  booking: Booking = {id: 0, guestId: 0, hotelId: 0, checkInDate: new Date().toDateString(), checkOutDate: new Date().toDateString(), totalPrice: 0.0};

  onSave() {
    this.saveBooking.emit(this.booking);
    this.closeModal.emit();
  }
}
