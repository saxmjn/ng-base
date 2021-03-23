import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './_core/components/core.module';
import { MainModule } from './_main/components/main.module';
import { UserService } from './_core/services/user.service';
import { ApiService, RawService } from './_core/services/api.service';
import { AuthService } from './_core/services/auth.service';
import { StorageService } from './_core/services/storage.service';
import { RouterService } from './_core/services/router.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainModule
  ],
  providers: [UserService, ApiService, AuthService, RawService, StorageService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
