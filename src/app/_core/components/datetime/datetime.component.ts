import {Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {monthStart, currentDate, lastMonthStart, lastMonthEnd, yesterdayDate} from 'src/app/_core/helpers/datetime';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    styleUrls: ['./datetime.component.scss']
})

export class DatetimeComponent  {
    @Output() visibleChange: EventEmitter<object> = new EventEmitter<any>();
    calendarPop = false;
    startDate: any = monthStart();
    endDate: any = currentDate();
    oldStartDate: any;
    oldEndDate: any;
    fromto = 'start';
    constructor(){
    }
    toISO(datetime) {
        if (datetime) {
            return datetime.toISOString();
        }
        else {
            return null;
        }
    }
    toggleCalendar(bool) {
        console.log(bool);
        this.calendarPop = bool;
    }
    toggleFromto(val) {
        if (val == 'end' && !this.startDate) {

        } else {
            this.fromto = val;
        }
    }
    toggleOption(option) {
        if (option == 'yesterday') {
            this.startDate = yesterdayDate();
            this.endDate = currentDate();
            this.toggleAction('save');
        } else if (option == 'today') {
            this.startDate = currentDate();
            this.endDate = null;
            this.toggleAction('save');
        }
        else if (option == 'last-month') {
            this.startDate = lastMonthStart();
            this.endDate = lastMonthEnd();
            this.toggleAction('save');
        } else if (option == 'current-month') {
            this.startDate = monthStart();
            this.endDate = currentDate();
            this.toggleAction('save');
        }
    }
    toggleAction(action) {
        if (action == 'save') {
            this.calendarPop = false;
            this.visibleChange.emit({'start_date': this.toISO(this.startDate), 'end_date': this.toISO(this.endDate)});
        }
        else if (action == 'cancel') {
            this.calendarPop = false;
        }
        this.fromto = 'start';
    }
    dateSelected(value) {
        if (this.fromto == 'start') {
            this.fromto = 'end';
        }
    }
}