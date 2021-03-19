import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StakeholderQuestion9Component } from './local initiative/stakeholder-question9/stakeholder-question9.component';
import { StakeholderQuestion10Component } from './stakeholder-question10/stakeholder-question10.component';
import { StakeholderQuestion11Component } from './stakeholder-question11/stakeholder-question11.component';
import { StakeholderQuestion12Component } from './stakeholder-question12/stakeholder-question12.component';

@NgModule({
  declarations: [
    AppComponent,
    StakeholderQuestion9Component,
    StakeholderQuestion10Component,
    StakeholderQuestion11Component,
    StakeholderQuestion12Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
