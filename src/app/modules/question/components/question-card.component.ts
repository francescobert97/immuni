import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/models/question.models';

@Component({
  selector: 'app-question-card',
  template: `
    <div id="question-card" class="m-4" *ngFor="let question of questionList; let idx = index">
      <span>{{question.question}}</span>
      <span class="display-6 display-font-weight" [class]="showAnswer[idx]? 'closeAccordion' : null" (click)="showAnswer[idx] = !showAnswer[idx]">+</span>
      <p *ngIf="showAnswer[idx]">{{question.answer}}</p>
    </div>




  `,
  styles: [
    `
    #question-card {
      padding: 0.5rem 2rem;
      border: 1px solid black;
      border-radius: 30px;
    }

    .closeAccordion {
      color: red;
     
    }
    `
  ]
})
export class QuestionCardComponent implements OnInit {
  public readonly showAnswer: {[key: number]: boolean} = {};
  @Input() public questionList:IQuestion[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
