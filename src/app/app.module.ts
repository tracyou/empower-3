import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/localInitiatives/map/map.component';
import { ObjectivesComponent } from './components/localInitiatives/objectives/objectives.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { StakeholderQuestionsComponent } from './components/localInitiatives/stakeholder-questions/stakeholder-questions.component';
import { JourneyAssetsComponent } from './components/localInitiatives/journey-assets/journey-assets.component';

const appRoutes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'localInitiative', component: MapComponent},
  { path: 'objectives', component: ObjectivesComponent},
  { path: 'stakeholders', component: StakeholderQuestionsComponent},
  { path: 'journeyAssets', component: JourneyAssetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
    ObjectivesComponent,
    HomeComponent,
    StakeholderQuestionsComponent,
    JourneyAssetsComponent
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
