import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotelsModule/components/hotels/hotels.component';
import { BookingsComponent } from './hotelsModule/components/bookings/bookings.component';

const routes: Routes = [
  { path: '', redirectTo: 'guests', pathMatch: 'full' },
  { path: 'hotels', pathMatch: 'full', component: HotelsComponent  },
  { path: 'bookings', pathMatch: 'full', component: BookingsComponent },
  {
    path: 'guests',
    loadChildren: () =>
      import('./hotelsModule/hotels.module').then((m) => m.HotelsModule),
  },
  { path: '**', redirectTo: 'guests' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
