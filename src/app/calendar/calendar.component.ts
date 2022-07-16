import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public CalendarService:CalendarService,){}
    dateString : string = new Date().toDateString();
    lastDay: any =new Date(this.CalendarService.date.getFullYear(), this.CalendarService.date.getMonth()+1,0).getDate()
    lastDayArr=new Array(this.lastDay)


   ngOnInit() {
     this.CalendarService.displayDays( )
   }
 }
