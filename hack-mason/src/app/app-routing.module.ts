import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path:'',component:LandingPageComponent
  },
  {
    path:'settings',component:SettingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
