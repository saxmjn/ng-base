import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {
    selectedTemplate = 'testimonials';
    constructor(private router$:RouterService) {
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
    loadWindow(option){
        this.selectedTemplate = option;
    };
}