import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
    chats = [
        {'name': 'Saksham Jain', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Pranav', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Ranjan', lastMessage: '', lastSeen: ''},
    {'name': 'Atul Priyadarshi', lastMessage: '', lastSeen: ''}];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}