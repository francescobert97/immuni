import { Component, Input, OnInit } from '@angular/core';
import { IHome } from 'src/app/shared/models/home.models';



@Component({
  selector: 'app-content-card-home',
  template: `
  
    <div class="{{homeContents?.style}}">
      <div id="card-content" class="">
        <div class="d-flex justify-content-center">
          <div *ngFor="let img of homeContents?.imgs">
            <img   [ngStyle]="{
              'width.rem': img.width,
              'height.rem': img.height,
              'position' : img.position,
              'top.%' : img.y,
              'left.%' : img.x
            }" src="{{img.image}}" alt="">
          </div>
        </div>

        <div class="">
          <h2 *ngIf="homeContents?.title">{{homeContents?.title}}</h2>
          <h4 class="my-5">{{homeContents?.subtitle}}</h4>
          <button class="btn " *ngIf="homeContents?.buttonLabel">{{homeContents?.buttonLabel}}</button>

          <ng-container *ngFor="let paragraph of homeContents?.paragraphs">
            <div class="d-flex justify-content-center my-1">
              <p class="text-center"
              [ngStyle]="{
                
                }
              "
              >
                {{paragraph.paragraph}}
              </p>
            </div>
          </ng-container>

          <a href="" *ngIf="homeContents?.link">{{homeContents?.link}}</a>
        </div>
      </div>

      <div *ngIf="homeContents?.cards" class="d-flex justify-content-center">
        <ng-container *ngFor="let card of homeContents?.cards">
          <div class=" m-3 d-flex flex-column justify-content-center align-items-center" id="card-comunication">
            <img src="{{card.img}}" alt="">
            <p class="text-center">{{card.paragraph}}</p>
          </div>
        </ng-container>
      </div>
  </div>

    
  `,
  styles: [
    `
    .startTogether {
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }

      h2 {
        font-size: 5em;
        color: #5751ff;
      }

      p {
        font-size: 1.4em;
      }
      
      div:nth-of-type(2) {
      display: flex;
        flex-direction: column;
        align-items: center;
        
        p {
          width: 50.9%;
        }
      }

    }

    .protectYourself {
      background: #182b57;
      color: white;
      padding: 4rem 0;
      div:nth-of-type(2) {
        display: flex;
        justify-content: space-around;

        h4 {
          font-size: 2.2em;
        }

        button {
          background: white;
          color: #5751ff;
          font-size: 1.2em;
          font-weight: bold;
          padding: 0.2rem 2rem;
          border-radius: 30px;
        }
      }
    }

    .news {
      height: 39rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          color: #5751ff;
          font-size: 1.5em;
          font-weight: bold;
          letter-spacing: 3px;
          
        }

        h4 {
          font-size: 2.8em;
        }

        p {
          width: 52.9%;
          font-size: 1.4em;
        }

        a {
          font-size: 1.6em;
          font-weight: bold;
          color: #5751ff;
        }

      }
    }

    .whatIsImmuni {
      height: 20rem;
      div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
        font-size: 1.7em;
        color: #5751ff;
        }

        h4 {
          font-size: 2.9em;
          width: 55%;
          text-align: center;
        }

        p {
          width: 47%;
          font-size: 1.4em;
        }
      }
    }

    .whyInstallImmuni {
      position: relative;
      background: #5751ff;
      color: white;
      display: flex;
      align-items: center;
      height: 109rem;

      div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div:nth-of-type(1) {
          display:flex;
          justify-content: center;
          align-items:center;
          background: #4a43f5;
          height: 30rem;
          width: 80%;
          border-radius: 20px;
          margin: 2.5rem 0;

          p {
            width: 30%;
            background: #4a43f5;
            font-size: 1.4em;
          }

        }


        div:nth-of-type(2) {
          display:flex;
          align-items: flex-start;
          justify-content:center;
          background: #4a43f5;
          height: 20rem;
          width: 80%;
          border-radius: 20px;
          p {
            text-align: center;
            width: 35%;
            font-size: 1.3em;
            margin-left: 5.5rem;
          }

        }

      }
    }

    .tecnology {
      height: 50rem;
      background: #5751ff;
      color: white;
      display: flex;
      align-items: center;
      div:nth-of-type(2) {
        height: 50rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    }

    .safety {
      height: 65rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div:nth-of-type(1) {
        div:nth-of-type(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .reportPositivity {
      padding: 0 10rem 0 10rem;
      div:first-child {
        display: flex;
        justify-content: center;
      }
      div:nth-of-type(2) {
          display: flex;
          flex-direction: column;
          align-items: center;

          button {
            background: #5751ff;
            border-radius: 20px;
            color: white;
          }
        }
      
    }

    .wantYouKnowMore {
      position: relative;
      height: 25rem;
      div:nth-of-type(2) {
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items: center;

          h2 {
            font-size: 3em;
            margin-top: 6rem;
            max-width: 400px;
          }

          button {
            font-size: 1.2em;
            padding: 0.5rem 2rem;
            background: #5751ff;
            border-radius: 20px;
            box-shadow: 0 0 20px rgb(105 147 255 / 30%);
            margin-top: -2rem;
            color:white;
          }
        }

    }

    #card-comunication {
      background: white;
      box-shadow: 0 10px 30px rgb(0 37 132 / 6%);
      width: 12rem;
      padding: 1.5rem 2rem;
      border-radius: 20px;
      img {
        max-width: 7.2rem;
      }

      p {
        width: 100%;
      }

    }
    `
  ]
})
export class ContentCardHomeComponent implements OnInit {
  @Input() homeContents!:IHome;
  constructor() { }

  ngOnInit(): void {
  }

}
