import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/local-initiative/map/map.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { LocalAuthorityComponent } from './components/local-authority/local-authority.component';
import { ProfileComponent } from './components/local-initiative/profile/profile.component';

const appRoutes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'localInitiative', component: MapComponent},
  { path: 'localAuthority', component: LocalAuthorityComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    HomeComponent,
    InspirationComponent,
    LocalAuthorityComponent,
    ProfileComponent,
    NavbarComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
