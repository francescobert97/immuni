import { Component, Input, OnInit } from '@angular/core';
import { IHome } from 'src/app/shared/models/home.models';

@Component({
  selector: 'app-phone-section',
  template: `
    <div id="phone-section" class="d-flex flex-column justify-content-center">
      <img class="position-absolute phoneImg" *ngIf="homeContents.imgs" src="{{homeContents.imgs[0].image}}" alt="">
      <div class="text-light d-flex flex-column justify-content-center align-items-center">
        <h5>{{homeContents.title}}</h5>
        <h2>{{homeContents.subtitle}}</h2>

        <div class="d-flex align-items-center phone-section-card section-card-1 w-100 ">
          <img *ngIf="homeContents.imgs" src="{{homeContents.imgs[1].image}}" alt="">
          <p class="text-center">{{homeContents.paragraphs[0].paragraph}}</p>
          <img *ngIf="homeContents.imgs" src="{{homeContents.imgs[2].image}}" alt="">
        </div>

        <div class="d-flex align-items-center justify-content-center phone-section-card section-card-2 w-100">
          <p class="text-center">{{homeContents.paragraphs[1].paragraph}}</p>
          <img *ngIf="homeContents.imgs" src="{{homeContents.imgs[3].image}}" alt="">
        </div>
      </div>

    </div>
  `,
  styles: [
    `
    #phone-section {
      max-height: 106rem;
      padding: 24rem 10rem 0 10rem;
      background: #5751ff;
      .phoneImg {
        top: -31.3%;
        right: 31.5%;
        width: 33rem;
        height: 56rem;
      }

      img {
        width: 22rem;
        height: 26rem;
      }

      h5 {
        letter-spacing: 2px;
        font-weight: bold;
      }

      h2 {
        font-size: 2.8em;
        padding: 4.5rem;
        width: 80%;
      }

      p {
        max-width: 380px;
        font-size: 1.5em;
        font-weight: 300;
        letter-spacing: 0;
      }

      .section-card-1 {
        padding: 3rem 0 8rem 0;
      }

      .section-card-2 {
        
      }

      .phone-section-card {
        background:  #4a43f5;
        border-radius: 20px;
        margin-bottom: 2rem;
      }
    }
    `
  ]
})
export class PhoneSectionComponent implements OnInit {
  @Input() homeContents!:IHome;
  constructor() { }

  ngOnInit(): void {
  }

}
