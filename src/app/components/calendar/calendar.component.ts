import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import localEs from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: localEs,
    events: [
      { title: 'Paro Nacional', date: '2021-07-20' },
      { title: 'Cumpleaños Gersain', date: '2021-07-15' }
    ]
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
