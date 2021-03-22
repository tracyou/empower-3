import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './localInitiatives/map/map.component';
import { ObjectivesComponent } from './localInitiatives/objectives/objectives.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'localInitiative', component: MapComponent},
  { path: 'objectives', component: ObjectivesComponent}
];

import { StakeholderQuestion9Component } from './components/local initiative/stakeholder-question9/stakeholder-question9.component';
import { StakeholderQuestion10Component } from './components/local initiative/stakeholder-question10/stakeholder-question10.component';
import { StakeholderQuestion11Component } from './components/local initiative/stakeholder-question11/stakeholder-question11.component';
import { StakeholderQuestion12Component } from './components/local initiative/stakeholder-question12/stakeholder-question12.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
    ObjectivesComponent,
    HomeComponent,
    StakeholderQuestion9Component,
    StakeholderQuestion10Component,
    StakeholderQuestion11Component,
    StakeholderQuestion12Component
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
