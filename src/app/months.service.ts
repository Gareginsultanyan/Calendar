import { Injectable } from '@angular/core';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {

  constructor() { }
  array:string[]=[
    'January','February',
    'March','April','May',
    'June','Jule','August',
    'September','October',
    'November','December',]
  displayDays(){
    for(let f=1; f<this.day; f++){
      this.emptyStr.push("")
    }
  }
  emptyStr:string[]=[];
  date:Date=new Date;
  day:any=this.date.getDay()
  num:number=1;
  month:string=this.array[this.date.getMonth()];
  nextNumber:number=this.date.getMonth()+1
  year:number=this.date.getFullYear()

 next(){
   if (this.nextNumber === 12) {
     this.nextNumber = 0
     this.year += 1
     this.month = this.array[this.date.getMonth() -11]
   }
  this.month=this.array[this.nextNumber++]

  let firstDay =new Date(this.date.getFullYear(),this.date.getMonth()+ this.num++, 1);
   this.day=firstDay.getDay()
   this.emptyStr=[]
   this.displayDays()
}

Prevus(){
if (this.nextNumber < 0) {
    this.nextNumber = 11
    this.year--
  }
 this.month=this.array[this.nextNumber--]
 let firstDay =new Date(this.date.getFullYear(),this.date.getMonth() + this.num--, -12);
 this.day=firstDay.getDay()
 this.emptyStr=[]
 this.displayDays()
}
}
