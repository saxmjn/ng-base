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
import { PricingComponent } from './pricing/pricing.component';
import { ConnectComponent } from './connect/connect.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';
import { BrowserComponent } from './browser/browser.component';
import { Features2Component } from './features-2/features-2.component';
import { HIW1Component } from './hiw-1/hiw-1.component';
import { FaqsComponent } from './faqs/faqs.component';
import { Newsletter1Component } from './newsletter-1/newsletter-1.component';
import { Newsletter2Component } from './newsletter-2/newsletter-2.component';
import { HIW2Component } from './hiw-2/hiw-2.component';
import { Hero1Component } from './hero-1/hero-1.component';
import { Hero2Component } from './hero-2/hero-2.component';
import { Testimonials1Component } from './testimonials-1/testimonials-1.component';
@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule,
    //
    BrowserModule, BrowserAnimationsModule,
],
    declarations: [
       BrowserComponent,
       DatetimeComponent,
       AlertComponent,
       NavbarComponent,
       SidebarComponent,
       PricingComponent,
       ConnectComponent,
       TeamComponent,
       FeaturesComponent,
       Features2Component,
       Hero1Component,
       Hero2Component,
       HIW1Component,
       HIW2Component,
       FaqsComponent,
       Newsletter1Component,
       Newsletter2Component,
       Testimonials1Component
    ],
    exports: [
        //Modules
        CommonModule, HttpClientModule, FormsModule, RouterModule,
        //Components
        BrowserComponent,
        DatetimeComponent,
        AlertComponent,
        NavbarComponent,
        SidebarComponent,
        PricingComponent,
        ConnectComponent,
        TeamComponent,
        FeaturesComponent,
        Features2Component,
        Hero1Component,
        Hero2Component,
        HIW1Component,
        HIW2Component,
        FaqsComponent,
        Newsletter1Component,
        Newsletter2Component,
        Testimonials1Component
    ]
})

export class CoreModule {
}