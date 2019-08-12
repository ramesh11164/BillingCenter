import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DistictComponent } from './distict/distict.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'}, 
  {    path:'company',component:CompanyComponent },
  {    path:'distict',component:DistictComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CompanyComponent,DistictComponent]
