import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';

import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LogoutComponent } from './logout/logout.component';
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { TemperatureComponent } from './temperature/temperature.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'data-binding',component:DataBindingComponent},
  {path:'emi',component:EmiComponent},
  {path:'simpleinterest',component:SimpleinterestComponent},
  {path:'celsius',component:CelsiusComponent},
  {path:'temperature',component:TemperatureComponent},

  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BmiComponent},
  {path:'logout',component:LogoutComponent},

  

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
