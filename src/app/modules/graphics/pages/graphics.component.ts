import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  template: `
    <div>
      <app-graphics-card ></app-graphics-card>
    </div>
  `,
  styles: [
  ]
})
export class GraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
