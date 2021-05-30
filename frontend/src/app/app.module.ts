import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/local-initiative/map/map.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { LocalAuthorityComponent } from './components/local-authority/local-authority.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfileComponent } from './components/local-initiative/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { LibraryComponent } from './components/library/library.component';



const appRoutes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'initiative', component: MapComponent},
  { path: 'authority', component: LocalAuthorityComponent},
  { path: 'inspiration', component: InspirationComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'profileInitiative', component: ProfileComponent},
  { path: 'library', component: LibraryComponent},
  { path: '**', component: ErrorComponent}
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
    LoginPageComponent,
    ProfileComponent,
    ErrorComponent,
    LibraryComponent,
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
