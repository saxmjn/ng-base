import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './_main/components/auth/auth.component';
import { ChatComponent } from './_main/components/chat/chat.component';
import { ContactComponent } from './_main/components/contact/contact.component';
import { FileComponent } from './_main/components/file/file.component';
import { HomeComponent } from './_main/components/home/home.component';
import { SocialComponent } from './_main/components/social/social.component';
import { UIComponent } from './_main/components/ui/ui.component';

const routes: Routes = [
  {
    path: 'features',
    component: HomeComponent
  },
  {
    path: 'authe',
    component: AuthComponent
  },
  {
    path: 'ui',
    component: UIComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'file',
    component: FileComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', enableTracing: true
  })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
