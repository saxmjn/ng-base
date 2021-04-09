import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-hiw-2',
        templateUrl: './hiw-2.component.html',
        styleUrls: ['./hiw-2.component.scss']
})

export class HIW2Component implements OnInit {
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}