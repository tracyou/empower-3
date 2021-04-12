import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/localInitiatives/map/map.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { LocalAuthorityComponent } from './components/local-authority/local-authority.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'localInitiative', component: MapComponent},
  { path: 'localAuthority', component: LocalAuthorityComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    HomeComponent,
    NavbarComponent,
    InspirationComponent,
    LocalAuthorityComponent,
    SignupComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
