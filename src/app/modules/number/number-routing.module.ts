import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './pages/number.component';

const routes: Routes = [{ path: '', component: NumberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRoutingModule { }
