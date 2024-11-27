import { Component, EventEmitter, Output } from '@angular/core';
import { Guest } from '../../../interfaces/Guest';

@Component({
  selector: 'app-guests-modal',
  templateUrl: './guests-modal.component.html',
  styleUrls: ['./guests-modal.component.scss'],
})
export class GuestsModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveGuest = new EventEmitter<Guest>();

  guest: Guest = {id: 0, fullName: '', email: '', phoneNumber: ''};

  onSave() {
    this.saveGuest.emit(this.guest);
    this.closeModal.emit();
  }
}
