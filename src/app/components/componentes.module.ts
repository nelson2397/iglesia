import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';


import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersComponent } from './footers/footers.component';
import { CalendarComponent } from './calendar/calendar.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FootersComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FootersComponent,
    CalendarComponent
  ]
})
export class ComponentesModule { }
