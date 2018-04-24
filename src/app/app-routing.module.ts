import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { FormUserComponent } from "./form-user/form-user.component";
import { NgbdDatepickerPopup } from "./datepicker-popup/datepicker-popup.component";
const routes: Routes = [
   // default is dashbroard
   {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'vinhdaica',
    component: FormUserComponent
  },
  {
    path: 'datetime',
    component: NgbdDatepickerPopup
  },

];

@NgModule({
  exports: [RouterModule],

  imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
