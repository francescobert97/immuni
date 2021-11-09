import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './pages/question.component';
import { SearchQuestionComponent } from './components/search-question.component';
import { QuestionCardComponent } from './components/question-card.component';


@NgModule({
  declarations: [
    QuestionComponent,
    SearchQuestionComponent,
    QuestionCardComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
