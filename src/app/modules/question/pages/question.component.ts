import { Component, OnInit } from '@angular/core';
import { IHomeE } from 'src/app/shared/models/home.models';
import { HOMECONTENTI } from 'src/app/shared/models/mock-home2';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-question',
  template: `
  <ng-container *ngFor="let language of languages; let idx = index">
    <div class="d-flex flex-column justify-content-center align-items-center" *ngIf="language.showLanguage">
      
        <app-search-question [search]="language.contents.faq.search"></app-search-question>

        <app-question-card [questionList]="language.contents.faq.questions"></app-question-card>

    </div>
  </ng-container>
  `,
  styles: [
  ]
})
export class QuestionComponent implements OnInit {
  public languages:IHomeE[] = HOMECONTENTI;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.languagesUpdate$.subscribe(item => this.languages = item);
  }

}
