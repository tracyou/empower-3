import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StakeholderQuestion9Component } from './components/local initiative/stakeholder-question9/stakeholder-question9.component';
import { StakeholderQuestion10Component } from './components/local initiative/stakeholder-question10/stakeholder-question10.component';
import { StakeholderQuestion11Component } from './components/local initiative/stakeholder-question11/stakeholder-question11.component';
import { StakeholderQuestion12Component } from './components/local initiative/stakeholder-question12/stakeholder-question12.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StakeholderQuestion9Component,
    StakeholderQuestion10Component,
    StakeholderQuestion11Component,
    StakeholderQuestion12Component
  ],

  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
