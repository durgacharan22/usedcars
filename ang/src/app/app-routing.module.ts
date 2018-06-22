import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FinalComponent } from './final/final.component'


const routes: Routes = [
  { path: '',component: OneComponent },
  { path: 'two',component: TwoComponent },
  { path: 'final',component: FinalComponent }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
