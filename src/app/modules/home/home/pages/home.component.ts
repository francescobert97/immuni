import { Component, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/layout/navbar.component';
import { HOMECONTENT } from 'src/app/shared/models/mock-home';
import { IHome } from 'src/app/shared/models/home.models';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>

  <div>
    <app-content-card-home></app-content-card-home>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  contentLanguage:IHome[] = HOMECONTENT; 
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.contentLanguage)
  }

}
