import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  weight:number=0;
  height:number=0;
  result:number=0;
  category:string='category'

  bmi(){
    console.log(this.weight,this.height);
    this.result=this.weight/(this.height^2);
    console.log(this.result);


    if(this.result <= 19){
      this.category='underweight';
    }else if(this.result >= 19 && this.result  <25 ){
      this.category ='Normal weight';
    }else if(this.result >= 25 && this.result  <35 ){
      this.category ='over weight';
  
}
  }
}
