import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  


    capture(value:string){
      alert(value);
  }


  area:string='';
   textlength:number=0;
 
     
   text: string = '';
   
 
      
   
   }

