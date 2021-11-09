import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { ContentCardHomeComponent } from './components/content-card-home.component';
import { TechnologySectionComponent } from './components/technology-section.component';
import { PhoneSectionComponent } from './components/phone-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContentCardHomeComponent,
    TechnologySectionComponent,
    PhoneSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
