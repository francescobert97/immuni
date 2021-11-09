import { Component, Input, OnInit } from '@angular/core';
import { IHome } from 'src/app/shared/models/home.models';

@Component({
  selector: 'app-technology-section',
  template: `
    <div id="section-phone" class="d-flex flex-column align-items-center text-light">
      <h5 class="my-5">{{homeContents?.title}}</h5>
      <h2 class="my-5 ">{{homeContents?.subtitle}}</h2>
      <img *ngIf="homeContents.imgs" src="{{homeContents.imgs[0].image}}" alt="">
      <p class="text-center">{{homeContents.paragraphs[0].paragraph}}</p>
    </div>

  `,
  styles: [
    `
    #section-phone {
      max-height: 62.5rem;
      background: #5751ff;
      h5 {
        font-weight: bold;
        letter-spacing: 2px;
      }

      h2{
        font-size: 3em;
      }

      img {
        width: 38%;
        height: 38%;
      }
      p {
        max-width: 660px;
        font-size: 1.4em;
        font-weight: 300;
      }
    }
    `
  ]
})
export class TechnologySectionComponent implements OnInit {
  @Input() homeContents!:IHome;
  constructor() { }

  ngOnInit(): void {
  }

}
