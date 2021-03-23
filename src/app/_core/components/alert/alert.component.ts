import {Component, OnInit, Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent  {
    @Input() events: any;
    constructor(){
    }
}