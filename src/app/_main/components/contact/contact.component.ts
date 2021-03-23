import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contacts = [
    {'name': 'Saksham Jain', email: 'sakshamjain.co@gmail.com', phone: '+919461515368', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Pranav', email: '', phone: '', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Ranjan', email: '', phone: '', lastMessage: '', lastSeen: ''},
    {'name': 'Atul Priyadarshi', email: '', phone: '', lastMessage: '', lastSeen: ''}];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}