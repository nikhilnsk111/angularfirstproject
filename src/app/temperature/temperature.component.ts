import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {


  celsius:number=0
  fahrenheit:number=0
  result:number=0

  C(){
    console.log(this.celsius);
    this.result=(this.celsius*9/5)+32;
    console.log(this.result);
  }
  F(){
    console.log(this.fahrenheit);
    this.result=(this.fahrenheit-32)*5/9;
    console.log(this.result);
  }
 
}
