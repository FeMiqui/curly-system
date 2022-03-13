import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HelpComponent } from './components/help/help.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
