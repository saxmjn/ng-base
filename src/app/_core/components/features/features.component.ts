import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-features',
        templateUrl: './features.component.html',
        styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}