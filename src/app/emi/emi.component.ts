import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {

  principle:number=0;
  rate:number=0;
  period:number=0;
  result:number=0;

// rate=> rate has to be taken as how musch percent you are taken divided by 12 and divided by 100(example---12%==> [12/12/100=0.001])
// period ==>number of months(eg: 1year=12months)

  emi(){
  console.log(this.principle,this.rate,this.period);
  this.result=((this.principle)*(this.rate/1200)*(1+(this.rate/1200))**(this.period*12))/((1+(this.rate/1200))**(this.period*12)-1);
  console.log(this.result);
  }
}
