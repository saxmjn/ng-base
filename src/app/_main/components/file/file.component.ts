import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss']
})

export class FileComponent implements OnInit {
    activities = [
        {name: 'Saksham Jain', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Pranav', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {name: 'Ayush Ranjan', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ];
    folders = [
        {name: 'Design', quantity: 10},
        {name: 'Product', quantity: 15},
        {name: 'Operations', quantity: 7},
        {name: 'Finance', quantity: 23},
        {name: 'Marketing', quantity: 11},
    ];
    files = [{name: 'Saksham Jain', datetime: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},];
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}