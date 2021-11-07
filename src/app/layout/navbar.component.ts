import { Component, OnInit } from '@angular/core';
import { LanguageType } from '../shared/enums.enum';
import { LanguageService } from '../shared/services/language.service';

export interface ILink {
  home: string,
  documentation: string,
  graphics: string,
  numbers: string,
  faq: string,
  download: string
}

export interface IMenu {
  italian: string,
  english: string,
  deutsch: string,
  francais: string,
  espanol: string
}

export interface ILanguage {
  showLanguage: boolean,
  linkContent: ILink,
  languageMenu: IMenu,
  languageType: LanguageType
}



@Component({
  selector: 'app-navbar',
  template: `
    <nav class=" w-100 d-flex justify-content-between  align-items-center py-5">
      <div class="d-flex ms-5 col-3 ">
        <img src="https://www.immuni.italia.it/c1f0755fa13caaa715eba8b04e4b774a.svg" alt="">
      </div>

      <ng-container  *ngFor="let content of language" class="d-flex justify-content-between">
            <div id="language-link" *ngIf="content.showLanguage" class=" ms-5 col-7 d-flex justify-content-between align-items-center">
              <a href="javascript:void(0)" routerLink="/home">{{content.linkContent?.home}}</a>
              <a href="javascript:void(0)" routerLink="/documentation">{{content.linkContent?.documentation}}</a>
              <a href="javascript:void(0)" routerLink="/graphics">{{content.linkContent?.graphics}}</a>
              <a href="javascript:void(0)" routerLink="/number">{{content.linkContent?.numbers}}</a>
              <a href="javascript:void(0)" routerLink="/question">{{content.linkContent?.faq}}</a>
              <button class="text-light btn px-5" routerLink="/download">{{content.linkContent.download}}</button>
            </div>

            <div *ngIf="content.showLanguage" (click)="languageMenuVisible = !languageMenuVisible"  class=" mt-2 col-2 d-flex justify-content-start">
                <p  *ngIf="languageMenuVisible === false; else currentLanguageActive" class="ms-3">{{languageMenuClose}}<span class="ms-1">v</span></p>
            </div>
              
            <ng-template #currentLanguageActive>
              <ul [class.menuVisible]="languageMenuVisible" class="language-list">
                <li (click)="updateLanguage(language[0])">{{content.languageMenu?.italian}}</li>
                <li (click)="updateLanguage(language[1])">{{content.languageMenu?.english}}</li>
                <li (click)="updateLanguage(language[2])">{{content.languageMenu?.deutsch}}</li>
                <li (click)="updateLanguage(language[3])">{{content.languageMenu?.francais}}</li>
                <li (click)="updateLanguage(language[4])">{{content.languageMenu?.espanol}}</li>
              </ul>
            </ng-template>
      </ng-container>
    </nav>
  `,
  styles: [
    `
    nav {
      position: fixed;
      font-size: 1.1em;
      font-weight: bold;
      color: #5751ff;
      a {
        text-decoration: none;
        color: #5751ff;
      }
      
      button {
        min-width: 10rem;
        height: 2.7rem;
        font-size: 0.9em;
        font-weight: bold;
        border-radius: 30px;
        background: #5751ff;
        box-shadow: 0 0 20px rgb(105 147 255 / 30%);
        
      }

      div:first-of-type {
        img {
          width: 55%;
        }
      }

      #language-link {
        a {
          font-size: 0.95em;
        }
      }

      .language-list {
        overflow: hidden;
          height: 0;
          position: absolute;
          list-style-type: none;
          top: 38%;
          background: black;
          padding: 0 1.5rem;
          margin-left: 1rem;
          border-radius: 30px;
          li {
            margin: 0.2rem 0 1rem 0;
          }
      }
      
      .menuVisible {
        height: 13rem;
      }
    }
    `
  ]
})
export class NavbarComponent implements OnInit {
  languageMenuVisible:boolean = false;
  languageMenuClose:string = 'Italiano'

  public language: ILanguage[] = [
    {
      showLanguage: true,
      linkContent: {
        home: 'Home',
        documentation: 'Documentazione',
        graphics: 'Grafica',
        numbers: 'Numeri',
        faq: 'Domande',
        download: 'Scarica l app'
      },
      languageMenu: {
        italian: 'Italiano',
        english:  'English',
        deutsch: 'Deutsch',
        francais: 'Francais',
        espanol: 'Espanol'
      },
      languageType: LanguageType.ITALIAN
    },
    {
      showLanguage: false,
      linkContent: {
        home: 'Home',
        documentation: 'Documentation',
        graphics: 'Graphics',
        numbers: 'Numbers',
        faq: 'FAQ',
        download: 'Download the app'
      },
      languageMenu: {
        italian: 'italian',
        english:  'english',
        deutsch: 'deutsch',
        francais: 'francais',
        espanol: 'espanol'
      },
      languageType: LanguageType.ENGLISH
    },
    {
      showLanguage: false,
      linkContent: {
        home: 'Home',
        documentation: 'Dokumentation',
        graphics: 'Grafik',
        numbers: 'Zahlen',
        faq: 'Fragen',
        download: 'App herunterladen'
      },
      languageMenu: {
        italian: 'italian',
        english:  'english',
        deutsch: 'deutsch',
        francais: 'francais',
        espanol: 'espanol'
      },
      languageType: LanguageType.DEUTSCH
    },
    {
      showLanguage: false,
      linkContent: {
        home: 'Accueil',
        documentation: 'Documentation',
        graphics: 'Graphisme',
        numbers: 'Nombres',
        faq: 'Questions',
        download: 'Télécharger l application'
      },
      languageMenu: {
        italian: 'italian',
        english:  'english',
        deutsch: 'deutsch',
        francais: 'francais',
        espanol: 'espanol'
      },
      languageType: LanguageType.FRANCAIS
    },
    {
      showLanguage: false,
      linkContent: {
        home: 'Inicio',
        documentation: 'Documentacion',
        graphics: 'Graficos',
        numbers: 'Numeros',
        faq: 'Preguntas',
        download: 'Descargate la applicacion'
      },
      languageMenu: {
        italian: 'italian',
        english:  'english',
        deutsch: 'deutsch',
        francais: 'francais',
        espanol: 'espanol'
      },
      languageType: LanguageType.ESPANOL
    }
  ]

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  public updateLanguage(content: ILanguage) {
    this.checkValueBasedOnForEach(content);

    switch(content.languageType) {
      case(LanguageType.ITALIAN):
        this.ObtainLabelForCloseMenu(content.languageMenu.italian)
      break

      case(LanguageType.ENGLISH):
        this.ObtainLabelForCloseMenu(content.languageMenu.english)
      break

      case(LanguageType.DEUTSCH):
        this.ObtainLabelForCloseMenu(content.languageMenu.deutsch)
      break

      case(LanguageType.FRANCAIS):
        this.ObtainLabelForCloseMenu(content.languageMenu.francais)
      break

      case(LanguageType.ESPANOL):
        this.ObtainLabelForCloseMenu(content.languageMenu.espanol)
      break
    }
  }

  private checkValueBasedOnForEach (findLanguage:ILanguage):void {
    this.language.forEach((value, index) => {
          
      if(findLanguage === value) {
        value.showLanguage = true
      } 

      if(value !== findLanguage) {
        value.showLanguage = false
      }
    }) 
  }

  private ObtainLabelForCloseMenu(label:string):void {
    this.languageMenuClose = label;
  }
}

//*ngIf="content?.languageShow"