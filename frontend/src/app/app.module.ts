import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/local-initiative/map/map.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { LocalAuthorityComponent } from './components/local-authority/local-authority.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { InlogpaginaComponent } from './components/inlogpagina/inlogpagina.component';
import { ProfileComponent } from './components/local-initiative/profile/profile.component';


const appRoutes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'initiative', component: MapComponent},
  { path: 'authority', component: LocalAuthorityComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: InlogpaginaComponent},
  { path: 'profileInitiative', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    HomeComponent,
    InspirationComponent,
    LocalAuthorityComponent,
    NavbarComponent,
    SignupComponent,
    InlogpaginaComponent,
    ProfileComponent,
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
