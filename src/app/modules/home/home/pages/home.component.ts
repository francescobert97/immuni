import { Component, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/layout/navbar.component';
import { HOMECONTENT } from 'src/app/shared/models/mock-home';
import { IHomeE } from 'src/app/shared/models/home.models';
import { HOMECONTENTI } from 'src/app/shared/models/mock-home2';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-home',
  template: `
  <ng-container *ngFor="let content of contenuto; let idx = index">

    <div *ngIf="content.showLanguage">

      <div>
        <app-content-card-home [contenuto]="content.contentItalian[0]"></app-content-card-home>
      </div>

      <div>
        <app-content-card-home [contenuto]="content.contentItalian[1]"></app-content-card-home>
      </div>

      <div id="background-content1">
        <app-content-card-home [contenuto]="content.contentItalian[2]"></app-content-card-home>
      </div>

      <div id="background-content2">
        <app-content-card-home [contenuto]="content.contentItalian[3]"></app-content-card-home>
      </div>

      <div class="position-relative">
        <svg id="section-divider" class="" preserveAspectRatio="xMinYMin meet" viewBox="0 0 1440 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M0 197V144.5C0 144.5 297 0 720 0C1143 0 1440 147 1440 147V197H0Z" fill="#5751FF"></path>
          <path d="M720 50C1143 50 1440 197 1440 197H0C0 197 297 50 720 50Z" fill="#5751FF"></path>
        </svg>

        <app-content-card-home [contenuto]="content.contentItalian[4]"></app-content-card-home>

      </div>

      <div class="position-relative">
        <app-content-card-home [contenuto]="content.contentItalian[5]"></app-content-card-home>

        <svg id="section-divider-bottom" class="" preserveAspectRatio="xMinYMin meet" viewBox="0 0 1440 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.1" d="M0 0V52.5C0 52.5 297 197 720 197C1143 197 1440 50 1440 50V0H0Z" fill="#5751FF"></path>
          <path d="M720 147C1143 147 1440 0 1440 0H0C0 0 297 147 720 147Z" fill="#5751FF"></path>
        </svg>
      </div>

      <div>
        <app-content-card-home [contenuto]="content.contentItalian[6]"></app-content-card-home>
      </div>

      <div>
        <app-content-card-home [contenuto]="content.contentItalian[7]"></app-content-card-home>
      </div>

      <div>
        <app-content-card-home [contenuto]="content.contentItalian[8]"></app-content-card-home>
      </div>
    </div>

  </ng-container>
  
  `,
  styles: [
    `
    #background-content1 {
      height: 50rem;
      background: url('https://www.immuni.italia.it/dgc-illustration.24662a6c915fc64ce52b.png') ;
      background-size: 122%;    
    }

    #background-content2 {
      height: 64rem;
      background: url('https://www.immuni.italia.it/dgc-illustration.24662a6c915fc64ce52b.png') bottom ;
      background-size: 800%; 
    }

    #section-divider {
     
        position: absolute;
        top : -11.3%;

    }

    #section-divider-bottom {

        position: absolute;
        bottom: -24.2%;

    }

   


    `
  ]
})
export class HomeComponent implements OnInit {
  contenuto:IHomeE[] = HOMECONTENTI;
  
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.languagesUpdate$.subscribe(item => { this.contenuto = item
    console.log(this.contenuto)
    });
  }

}
