import { Component, EventEmitter, Output } from '@angular/core';
import { Hotel } from '../../../interfaces/Hotel';

@Component({
  selector: 'app-hotels-modal',
  templateUrl: './hotels-modal.component.html',
  styleUrls: ['./hotels-modal.component.scss'],
})
export class HotelsModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveHotel = new EventEmitter<Hotel>();

  hotel: Hotel = {id: 0, name: '', address: '', phoneNumber: '', rating: 0.0};

  onSave() {
    this.saveHotel.emit(this.hotel);
    this.closeModal.emit();
  }
}
