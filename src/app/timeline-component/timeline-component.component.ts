import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActionModel, ProductModel } from '../model/Product';
import { DateServiceService } from '../services/date-service.service';

@Component({
  selector: 'app-timeline-component',
  templateUrl: './timeline-component.component.html',
  styleUrls: ['./timeline-component.component.scss']
})
export class TimelineComponentComponent implements OnInit {

  monthYear: string = 'October 2021';
  toppings = new FormControl('');
  intervals = ['This week', '2 week', 'This month'];
  // productList = ['Communications','Listings','Logged-in','Host management','Discovery'];
  productList: ProductModel[] = [];
  dates: Date[] = [];
  numberOfDaysBlocks = 7;
  year: number;
  month: number;
  date: number;
  today :Date;
  blockList = [2,4,1];
  constructor(private _dateService: DateServiceService) {
    this.today = new Date();
    this.year=this.today.getFullYear();
    this.month =this.today.getMonth();
    this.date = this.today.getDate();
   }

  ngOnInit() {
    this.dates = this._dateService.getThisWeek(this.year,this.month,this.date, 1);
    this.adddata();
  }
  adddata() {
    this.productList.push(new ProductModel('Communications', [
      new ActionModel(new Date(this.year, this.month, this.today.getDate()), new Date(this.year, this.month, this.today.getDate()+3), 'Build basic messaging', 'desc', 'Alpha'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-1), new Date(this.year, this.month, this.today.getDate()+1), 'My custom block', 'desc', 'Alpha')
    ]));
    this.productList.push(new ProductModel('Listings', [
      new ActionModel(new Date(this.year, this.month, this.today.getDate()+1), new Date(this.year, this.month, this.today.getDate()+3), 'Listing video', 'desc', 'GA'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-5), new Date(this.year, this.month, this.today.getDate()+4), '360-degree image support', 'desc', 'GA'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-2), new Date(this.year, this.month, this.today.getDate()+3), 'Multiple listing support', 'desc', 'Beta'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-1), new Date(this.year, this.month, this.today.getDate()+1), 'Amenities list', 'desc', 'GA')
    ]));
    this.productList.push(new ProductModel('Logged-in', [
      new ActionModel(new Date(this.year, this.month, this.today.getDate()), new Date(this.year, this.month, this.today.getDate()+1), 'Listing bookmarks', 'desc', 'GA')
    ]));
    this.productList.push(new ProductModel('Host management', [
      new ActionModel(new Date(this.year, this.month, this.today.getDate()+1), new Date(this.year, this.month, this.today.getDate()+3), 'Block out dates', 'desc', 'Alpha'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-2), new Date(this.year, this.month, this.today.getDate()+6), 'Add house rules to listing', 'desc', 'Alpha'),
      new ActionModel(new Date(this.year, this.month, this.today.getDate()), new Date(this.year, this.month, this.today.getDate()+3), 'Host discount codes', 'desc', 'Alpha')
    ]));
    this.productList.push(new ProductModel('Discovery', [
      new ActionModel(new Date(this.year, this.month, this.today.getDate()-1), new Date(this.year, this.month, this.today.getDate()+1), 'Featured listings on homepage', 'desc', 'GA')
    ]));
    // console.log(JSON.stringify(this.productList));

  }

  intervalChange(choice: any) {
    if (choice.value == 'This month') {
      this.dates = this._dateService.getThisMonthDays(this.year,this.month);
    } else if (choice.value == '2 week') {
      this.dates = this._dateService.getThisWeek(this.year,this.month, this.date, 2);
    } else {
      this.dates = this._dateService.getThisWeek(this.year,this.month, this.date, 1);
    }
  }

  isBetween(givenDate:Date,start:Date,end:Date){
    if(givenDate >= start && givenDate <= end){
      return (end.getDate() - start.getDate())+1;
    }
    return false;
  }

  calculateBlockList(task:ActionModel){
    let s1 = 0, s2 = 0, s3 = 0;
    for(let i=0;i<this.dates.length;i++){
      if(this.dates[i]<task.start){
        s1++;
      }
      if(this.isBetween(this.dates[i],task.start,task.end)){
        s2++;
      }
      if (this.dates[i] > task.end) {
        s3++;
      }
    }
    return [{ block: s1, visibility: false},{block: s2, visibility: true},{block: s3, visibility: false}]
  }

  getStyles(width: number, visibility:boolean){
    const w = (width / 7) * 100;
    let styles = {
      'width': w+'%',
      'visibility': visibility ? 'visible':'hidden',
      'background-color': '#93f193',
      'height': '50px'
    };
    return styles;
  }
}
