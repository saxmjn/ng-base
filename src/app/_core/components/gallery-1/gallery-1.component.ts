import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-gallery-1',
        templateUrl: './gallery-1.component.html',
        styleUrls: ['./gallery-1.component.scss']
})

export class Gallery1Component implements OnInit {
    gallery = [
        {src: 'https://source.unsplash.com/8b1cWDyvT7Y'},
        {src: 'https://source.unsplash.com/5VXH4RG88gc'},
        {src: 'https://source.unsplash.com/XtUd5SiX464'},
        {src: 'https://source.unsplash.com/JYGnB9gTCls'},
        {src: 'https://source.unsplash.com/-RBuQ2PK_L8'},
    ]
    constructor(private router$:RouterService, private router: Router){
    }
    ngOnInit(): void {
    }
    goTo(route){
        this.router$.goto(route)
    }
}