import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}