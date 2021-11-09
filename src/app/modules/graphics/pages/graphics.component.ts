import { Component, OnInit } from '@angular/core';
import { IHomeE } from 'src/app/shared/models/home.models';
import { HOMECONTENTI } from 'src/app/shared/models/mock-home2';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-graphics',
  template: `
  <ng-container *ngFor="let language of languages; let idx = index">

    <div *ngIf="language.showLanguage">
        <div>
          <app-graphics-card [graphicsContents]="language.contents.graphics"></app-graphics-card>
        </div>
    </div>
  </ng-container>
  `,
  styles: [
  ]
})
export class GraphicsComponent implements OnInit {
  public languages:IHomeE[] = HOMECONTENTI;
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.languagesUpdate$.subscribe(item =>  this.languages = item);
  }

}
