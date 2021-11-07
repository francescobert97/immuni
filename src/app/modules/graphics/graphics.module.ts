import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphicsComponent } from './pages/graphics.component';
import { GraphicsCardComponent } from './components/graphics-card.component';


@NgModule({
  declarations: [
    GraphicsComponent,
    GraphicsCardComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule
  ]
})
export class GraphicsModule { }
