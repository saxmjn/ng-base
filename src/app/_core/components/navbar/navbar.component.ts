import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
        type;
        sidebarIconToggle:boolean = false;
        value;
        gradientBackground:boolean = false;
        tab: string;

        @Output()slidenavClicked = new EventEmitter();

        constructor(private router$:RouterService, private router: Router){
        }

        ngOnInit(): void {
            this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((res) => {
                        //Logic for toggling navbar on and off
                        if(this.router.url === '/auth' || this.router.url === '/' || this.router.url === '/app' || this.router.url == '/brands'){
                                this.tab = 'explore';
                                this.type = 'hidden';
                        } else if (this.router.url === '/videos') {
                                this.type = 'normal';
                                this.tab = 'videos';
                        } else if (this.router.url === '/shopping') {
                                this.type = 'normal';
                                this.tab = 'shopping';
                        }else{
                                this.type = 'normal'
                        }
                        // For Sidebar Toggle
                        if(this.router.url === '/update'){
                                this.sidebarIconToggle = true;
                        }
         });
        }

        openSidebar(e){
                this.value =  true;
                this.slidenavClicked.emit(this.value);
        }


        goTo(route){
                this.router$.goto(route)
        }

}