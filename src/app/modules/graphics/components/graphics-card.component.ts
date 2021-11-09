import { Component, Input, OnInit } from '@angular/core';
import { IGraphics } from 'src/app/shared/models/home.models';


@Component({
  selector: 'app-graphics-card',
  template: `
    <h2>{{graphicsContents.title}}</h2>
    <p>{{graphicsContents.subtitle}}</p>
    <button>{{graphicsContents.buttonLabel}}</button>
    <img src="{{graphicsContents.img}}" alt="a interview image">
  `,
  styles: [
  ]
})
export class GraphicsCardComponent implements OnInit {
  @Input() graphicsContents!:IGraphics;
  constructor() { }

  ngOnInit(): void {
  }

}
