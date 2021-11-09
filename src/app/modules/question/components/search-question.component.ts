import { Component, Input, OnInit } from '@angular/core';
import { IQuestion, ISearch } from 'src/app/shared/models/question.models';

@Component({
  selector: 'app-search-question',
  template: `
  <div id="search">
    <h2>
      {{search.title}}
    </h2>

    <input type="search" placeholder="{{search.searchLabel}}"> 
  
  </div>

  `,
  styles: [
    `
    #search {
      padding: 10rem 0 0 0;
    }
    `
  ]
})
export class SearchQuestionComponent implements OnInit {
  @Input() public search!:ISearch;
  constructor() { }

  ngOnInit(): void {
  }

}
