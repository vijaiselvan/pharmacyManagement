import { ReturnscheduleComponent } from './returnschedule/returnschedule.component';
import { LoginComponent } from './login/login.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { PlacedemandComponent } from './placedemand/placedemand.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplyavailedComponent } from './supplyavailed/supplyavailed.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'placedemand',component:PlacedemandComponent},
  {path:'viewschedule',component:ViewscheduleComponent},
  {path:'supplyavailed',component:SupplyavailedComponent},
  {path:'returnschedule',component:ReturnscheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
