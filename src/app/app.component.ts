import {Component, NgIterable, OnInit} from '@angular/core';
import { MonthsService } from './months.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 constructor(public monthsService:MonthsService,) {}

  dateString:string = new Date().toDateString()
  Day: any =new Date(this.monthsService.date.getFullYear(), this.monthsService.date.getMonth()+1,0).getDate()
  DayArr=new Array(this.Day)

  ngOnInit() {
this.monthsService.displayDays( )}
}
