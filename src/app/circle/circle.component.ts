import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  radius:number=0;
  result:number=0;

  Area(){
    console.log(this.radius);
    this.result=3.14*this.radius*this.radius;
    console.log(this.result);
  }
    Perimeter(){
      console.log(this.radius,this.radius);
    this.result=2*(3.14)*(this.radius)
    console.log(this.result);
      
    }

}
