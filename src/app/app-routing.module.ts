import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './_main/components/auth/auth.component';
import { ChartComponent } from './_main/components/chart/chart.component';
import { ChatComponent } from './_main/components/chat/chat.component';
import { ContactComponent } from './_main/components/contact/contact.component';
import { FileComponent } from './_main/components/file/file.component';
import { FeaturesComponent } from './_main/components/features/features.component';
import { SocialComponent } from './_main/components/social/social.component';
import { StreamComponent } from './_main/components/stream/stream.component';
import { TemplateComponent } from './_main/components/template/template.component';
import { UIComponent } from './_main/components/ui/ui.component';
import { HomeComponent } from './_main/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
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
    path: 'template',
    component: TemplateComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'stream',
    component: StreamComponent
  },
  {
    path: 'chart',
    component: ChartComponent
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
