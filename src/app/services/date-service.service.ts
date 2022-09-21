import { Injectable } from '@angular/core';

@Injectable()
export class DateServiceService {

  constructor() { }

  getThisMonthDays(year: number, month: number) {
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }

  getThisWeek(year: number, month: number, date: number, weekNo: number) {
    const tempDate = new Date(year, month, date);
    const dates = [];
    const weekdayNum = tempDate.getDay();
    let total = weekNo * 7;
    const addDate = tempDate;
    addDate.setDate(date - weekdayNum);
    console.log('addDate:', addDate);

    while (total >= 1) {
      dates.push(new Date(addDate));
      addDate.setDate(addDate.getDate() + 1);
      total = total - 1;
    }
    return dates;

  }

}
