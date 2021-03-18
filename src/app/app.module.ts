import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StakeholderQuestion9Component } from './local initiative/stakeholder-question9/stakeholder-question9.component';

@NgModule({
  declarations: [
    AppComponent,
    StakeholderQuestion9Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
