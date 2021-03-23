import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
//Video Player
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatetimeComponent } from './datetime/datetime.component';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule,
    //
    BrowserModule, BrowserAnimationsModule,
],
    declarations: [
       DatetimeComponent,
       AlertComponent,
       NavbarComponent,
       SidebarComponent,
    ],
    exports: [
        //Modules
        CommonModule, HttpClientModule, FormsModule, RouterModule,
        //Components
        DatetimeComponent,
        AlertComponent,
        NavbarComponent,
        SidebarComponent,
    ]
})

export class CoreModule {
}