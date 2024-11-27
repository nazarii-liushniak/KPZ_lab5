import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { GuestsComponent } from './components/guests/guests.component';
import { GuestsModalComponent } from './components/guests/guests-modal/guests-modal.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelsModalComponent } from './components/hotels/hotels-modal/hotels-modal.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingsModalComponent } from './components/bookings/bookings-modal/bookings-modal.component';
import { DateFormatPipe } from '.././shared/pipes/date-format.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    GuestsComponent,
    GuestsModalComponent,
    HotelsComponent,
    HotelsModalComponent,
    BookingsComponent,
    BookingsModalComponent,
    DateFormatPipe
  ],
  imports: [CommonModule, FormsModule, HotelsRoutingModule],
})
export class HotelsModule {}
