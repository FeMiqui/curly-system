import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

//components
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { HelpComponent } from './components/help/help.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { NewsComponent } from './components/alerts/news/news.component';
import { FeedsComponent } from './components/alerts/feeds/feeds.component';
import { ZonesComponent } from './components/alerts/zones/zones.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FriendsComponent,
    ProfileComponent,
    ChatComponent,
    HelpComponent,
    AlertsComponent,
    NewsComponent,
    FeedsComponent,
    ZonesComponent,
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
    MatSelectModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
