import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
//Video Player
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from 'src/app/_core/components/core.module';
import { FeaturesComponent } from './features/features.component';
import { UIComponent } from './ui/ui.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { FileComponent } from './file/file.component';
import { SocialComponent } from './social/social.component';
import { ChartComponent } from './chart/chart.component';
import { TemplateComponent } from './template/template.component';
import { StreamComponent } from './stream/stream.component';

@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, CoreModule,
    //
    BrowserModule, BrowserAnimationsModule,
    //
    InlineSVGModule,
],
    declarations: [
        AuthComponent, FeaturesComponent, UIComponent, ChatComponent, ContactComponent, FileComponent, SocialComponent, ChartComponent, TemplateComponent, StreamComponent
    ],
    exports: [
        //Modules
        CommonModule, HttpClientModule, FormsModule, RouterModule,
    ]
})

export class MainModule {
}