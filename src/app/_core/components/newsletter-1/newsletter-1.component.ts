import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-newsletter-1',
        templateUrl: './newsletter-1.component.html',
        styleUrls: ['./newsletter-1.component.scss']
})

export class Newsletter1Component implements OnInit {
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}