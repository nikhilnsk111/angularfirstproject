import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';

import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipesComponent } from './pipes/pipes.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrComponent } from './err/err.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

import { CreateUserComponent } from './create-user/create-user.component';

import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

import { CreateReportComponent } from './create-report/create-report.component';

import { LoginComponent } from './login/login.component';


import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';

import { EmployeeTableComponent } from './employee-table/employee-table.component';


import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';






@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
  
    BmiComponent,
       DataBindingComponent,
      
       EmiComponent,
       SimpleinterestComponent,
       TemperatureComponent,
       DirectivesComponent,
       EmployeeComponent,
       PipesComponent,
       VehicleComponent,
       ErrComponent,
       AccountsComponent,
       FlipcartComponent,
       MailComponent,
       PinterestComponent,
       WeatherComponent,
       CreateVehicleComponent,
       
       CreateUserComponent,
       
       VehicleDetailsComponent,
      
       CreateReportComponent,
            
              LoginComponent,
                          
                          
                           CardDetailsComponent,
                           CardComponent,
                           CreateCardComponent,
                           Sibling1Component,
                           Sibling2Component,
                           ParentComponent,
                           ChildComponent,
                           RatingComponent,
                           
                           CapitalDirective,
                           BalancePipe,
                           
                           EmployeeTableComponent,
                          
                          
                                                      CreateEmployeeComponent,
                                                      LifeCycleHooksComponent,
                                                    
                                                     
                          
                           
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  AboutUsModule
  ],
  providers: [

    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
