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
    activeNav: string = '';
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((res) => {
            console.log(this.router.url);
            if (this.router.url == '/') {
                this.activeNav = 'home'
            } else if (this.router.url == '/template') {
                this.activeNav = 'template';
            } else if (this.router.url == '/features') {
                this.activeNav = 'features';
            } else if (this.router.url == '/ui') {
                this.activeNav = 'ui';
            } else if (this.router.url == '/contribute') {
                this.activeNav = 'contribute';
            }
        });
    }
    goTo(route){
        this.activeNav = route;
        this.router$.goto(route)
    }
}