import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card-home',
  template: `
    <div id="card-content" class="d-flex flex-column align-items-center">
      <img src="https://www.immuni.italia.it/hero-illustration.120b1e94f69a23426302.png" alt="">
      <h2>Ripartiamo insieme</h2>
      <p class="text-center">
        Tornare a vivere normalmente è possibile.<br>
        Immuni ci aiuta a farlo prima e senza rinunciare alla privacy.
      </p>
    </div>
  `,
  styles: [
    `
    #card-content {
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
    }
    `
  ]
})
export class ContentCardHomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
