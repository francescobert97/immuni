import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule) }, 
  { path: 'documentation', loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule) }, 
  { path: 'graphics', loadChildren: () => import('./modules/graphics/graphics.module').then(m => m.GraphicsModule) }, 
  { path: 'number', loadChildren: () => import('./modules/number/number.module').then(m => m.NumberModule) }, 
  { path: 'question', loadChildren: () => import('./modules/question/question.module').then(m => m.QuestionModule) }, 
  { path: 'download', loadChildren: () => import('./modules/download/download.module').then(m => m.DownloadModule) },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
