import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

// Event Binding
  click(){
    alert("hello nikhil");
  }

  submit(){
    alert("hi");
  }

  // two way data binding
  mobile:string='91';

  // property binding
  isData:boolean=true;

  // Interpolation
  age:number=25;
  name:string='Nikhil';


  num1:number=0;
  num2:number=0;
  result:number=0;

  add(){
    console.log(this.num1,this.num2);
    this.result=this.num1+this.num2;
    console.log(this.result);
  }

}
