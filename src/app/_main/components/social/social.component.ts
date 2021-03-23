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
        {name: 'Ayush Pranav', username: ''},
        {name: 'Ayush Ranjan', username: ''},
        {name: 'Atul Priyadarshi', username: ''},
        {name: 'Harsh Gupta', username: ''},
        {name: 'Shubham Vijay', username: ''},
    ];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}