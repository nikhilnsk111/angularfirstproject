import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isVisible:boolean=false;


  states:string[]=['ANDHRAPRADESH','KARNATAKA','KERALA','MAHARASTRA','TAMILNADU','TELANGANA'];

  products:any=[
    {name:'pen',price:10,rating:3.7},
    {name:'book',price:100,rating:1.9},
    {name:'shirt',price:1000,rating:2.5},
    {name:'shoes',price:2500,rating:3.4},
    {name:'bike',price:75000,rating:4.5},
    {name:'car',price:1000000,rating:3.9},
    

  ]

  newDate:any=new Date()
}
