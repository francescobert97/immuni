import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ILanguage } from 'src/app/layout/navbar.component';
import { LanguageType } from '../enums.enum';
import { IHomeE } from '../models/home.models';
import { HOMECONTENTI } from '../models/mock-home2';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public contents:IHomeE[] = HOMECONTENTI
  public languages$ = new Subject<IHomeE[]>();
  public languagesUpdate$ = this.languages$.asObservable();

  constructor() { }

  public updateLanguage(LanguageType: LanguageType) {
    const result = this.contents.find(content => content.languageType === LanguageType);
    
   if(result) {
     this.contents.forEach(v => {
       if(v === result) {
         v.showLanguage = true;
       }else {
         v.showLanguage = false;
       }
     })
     this.dispatchLanguage(this.contents);
   }
  }

  private dispatchLanguage(content:IHomeE[]) {
    this.languages$.next(content);
  }

}
