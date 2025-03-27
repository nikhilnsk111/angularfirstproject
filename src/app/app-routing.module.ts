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
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipesComponent } from './pipes/pipes.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleService } from './vehicle.service';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateReportComponent } from './create-report/create-report.component';

import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';


import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { TextAreaComponent } from './text-area/text-area.component';








const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent}, 
  {path:'data-binding',component:DataBindingComponent},
  {path:'emi',component:EmiComponent},
  {path:'simpleinterest',component:SimpleinterestComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'pipes',component:PipesComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'card',component:CardComponent},
  {path:'card-details/:id',component:CardDetailsComponent},
  
  {path:'sibling1',component:Sibling1Component},
  {path:'text-area',component:TextAreaComponent},
  

  {path:'create-card',component:CreateCardComponent},
  {path:'edit-card/:id',component:CreateCardComponent},

  {path:'parent',component:ParentComponent},
 
  
  {path:'flipcart',component:FlipcartComponent},
  {path:'mail',component:MailComponent},
  {path:'pinterest',component:PinterestComponent},
  {path:'weather',component:WeatherComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'create-user',component:CreateUserComponent},
  
  
  


  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},
  {path:'create-report',component:CreateReportComponent},


 

  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BmiComponent},
  
  


  

 ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[VehicleService]
})
export class AppRoutingModule { }
