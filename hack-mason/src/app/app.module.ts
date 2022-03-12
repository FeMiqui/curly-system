import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ItemListComponent } from './components/landing-page/item-list/item-list.component';
import { SettingsComponent } from './components/settings/settings.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ItemListComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
