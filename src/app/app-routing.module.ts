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
import { StudentComponent } from './student/student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';






const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
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
  
  {path:'flipcart',component:FlipcartComponent},
  {path:'mail',component:MailComponent},
  {path:'pinterest',component:PinterestComponent},
  {path:'weather',component:WeatherComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'student',component:StudentComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'create-student',component:CreateStudentComponent},


  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BmiComponent},
  {path:'logout',component:LogoutComponent},
  


  

 ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[VehicleService]
})
export class AppRoutingModule { }
