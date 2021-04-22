import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.scss']
})

export class StreamComponent implements OnInit {
    chats = [
    {'name': 'Saksham Jain', src: 'https://pbs.twimg.com/profile_images/1139843963714564096/9L6hyr4n_400x400.jpg', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Pranav', src: 'https://pbs.twimg.com/profile_images/573550170199064576/UTHkUppw_400x400.jpeg', lastMessage: '', lastSeen: ''},
    {'name': 'Ayush Ranjan', src: 'https://pbs.twimg.com/profile_images/1370431028569903106/2O0eWzwN_400x400.jpg', lastMessage: '', lastSeen: ''},
    {'name': 'Atul Priyadarshi', src: 'https://pbs.twimg.com/profile_images/1231816644592144384/2weVimj9_400x400.jpg', lastMessage: '', lastSeen: ''}];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}