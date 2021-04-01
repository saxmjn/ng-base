import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})

export class SocialComponent implements OnInit {
    posts = [
        {name: 'Saksham Jain', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Pranav', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Ranjan', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ];
    activities = [
        {name: 'Saksham Jain', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Pranav', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Ranjan', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ];
    friends = [
        {name: 'Ayush Pranav', src: 'https://pbs.twimg.com/profile_images/573550170199064576/UTHkUppw_400x400.jpeg', username: ''},
        {name: 'Ayush Ranjan', src: 'https://pbs.twimg.com/profile_images/1370431028569903106/2O0eWzwN_400x400.jpg', username: ''},
        {name: 'Atul Priyadarshi', src: 'https://pbs.twimg.com/profile_images/1231816644592144384/2weVimj9_400x400.jpg', username: ''},
        {name: 'Harsh Gupta', src:'https://pbs.twimg.com/profile_images/1036474047247175680/m3NSvUU0_400x400.jpg', username: ''},
        {name: 'Shubham Vijay', src:'https://pbs.twimg.com/profile_images/655464966187671552/AKNk4FcJ_400x400.jpg', username: ''},
    ];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}