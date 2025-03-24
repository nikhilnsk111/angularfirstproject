import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
 flipcarts:any=[];
constructor(private _flipcartService:FlipcartService){
   _flipcartService.getFlipcarts().subscribe(
    (data:any)=>{
      console.log(data);
      this.flipcarts=data;
    },(err:any)=>{
      alert()
    }
   )
  }
}
