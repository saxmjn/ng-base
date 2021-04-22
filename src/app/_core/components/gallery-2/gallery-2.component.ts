import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

// Project
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
        selector: 'app-gallery-2',
        templateUrl: './gallery-2.component.html',
        styleUrls: ['./gallery-2.component.scss']
})

export class Gallery2Component implements OnInit {
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
    scrollToElement($element): void {
        console.log($element);
        $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}