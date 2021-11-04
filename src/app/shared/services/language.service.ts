import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ILanguage } from 'src/app/layout/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages = new Subject<ILanguage>();

  constructor() { }

  public updateLanguage(languageContent:ILanguage) {
    this.dispatchLanguage(languageContent);
  }

  private dispatchLanguage(languageContent:ILanguage) {
    this.languages.next(languageContent);
  }

}
