import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordCountingComponent } from './views/word-counting/word-counting.component';

const routes: Routes = [
  {
    path: '',
    component: WordCountingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
