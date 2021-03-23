import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    features = [
        {title: 'Forms', svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512.022 512.022" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><path d="m361.408 267.238-8.793-150.517h-70.979v67.588h-30v-67.588h-115.544v67.588h-30v-67.588h-70.98l-15.765 269.873c-1.227 21.013 6.051 41.018 20.494 56.329s33.989 23.743 55.037 23.743h166.411c-9.71-18.906-15.194-40.324-15.194-63 0-68.44 49.954-125.423 115.313-136.428z" fill="#110052" data-original="#000000" style=""/><path d="m136.092 87.771c0-31.855 25.916-57.771 57.771-57.771s57.772 25.916 57.772 57.771v28.949h30v-28.949c0-48.397-39.374-87.771-87.772-87.771s-87.771 39.374-87.771 87.771v28.949h30z" fill="#110052" data-original="#000000" style=""/><path d="m492.809 403.666c0-59.748-48.609-108.357-108.357-108.357s-108.357 48.609-108.357 108.357 48.609 108.356 108.357 108.356 108.357-48.608 108.357-108.356zm-124.58 53.069-48.725-55.108 22.475-19.871 27.218 30.784 56.368-58.388 21.583 20.836z" fill="#110052" data-original="#000000" style=""/></g></g></svg>`},
        {svg: `<a></a>`, title: 'Authentication', route: 'authe'},
        {svg: '', title: 'Chat', route: 'chat'},
        {svg: '', title: 'Contacts', route: 'contact'},
        {svg: '', title: 'Calendar', route: 'calendar'},
        {svg: ``, title: 'Ecommerce', route: 'ecommerce'},
        {svg: '', title: 'Social', route: 'social'},
        {svg: '', title: 'File Box', route: 'file'}];
    constructor(private router$:RouterService){
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}