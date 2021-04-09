import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-faqs',
        templateUrl: './faqs.component.html',
        styleUrls: ['./faqs.component.scss']
})

export class FaqsComponent implements OnInit {
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}