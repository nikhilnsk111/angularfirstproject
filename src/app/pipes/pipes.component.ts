import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  products:any=[
    {ProductName:'pen',Price:20,Rating:3,FreeDelivery:false},
    {ProductName:'iphone',Price:100000,Rating:5,FreeDelivery:true},
    {ProductName:'shirt',Price:2000,Rating:4,FreeDelivery:true},
    {ProductName:'cap',Price:4500,Rating:3.4,FreeDelivery:true},
    {ProductName:'mobile case',Price:299,Rating:5,FreeDelivery:false},
    {ProductName:'remote',Price:500,Rating:3.9,FreeDelivery:false},
    {ProductName:'watch',Price:5000,Rating:4.5,FreeDelivery:false},
    {ProductName:'chappal',Price:900,Rating:3.9,FreeDelivery:true},
    {ProductName:'shoe',Price:5000,Rating:2.8,FreeDelivery:false},

  ];

  delete(i:number){
    this.products.splice(i,1);
  }
 

  sortup(){
    this.products.sort((a:any,b:any)=>a.Price-b.Price);
  }
  sortdown(){
    this.products.sort((a:any,b:any)=>b.Price-a.Price);
  }
  sorton(){
    this.products.sort((a:any,b:any)=>a.Rating-b.Rating);
  }
  sortoff(){
    this.products.sort((a:any,b:any)=>b.Rating-a.Rating);
  }

  


  //search- filter
  term:string='';
  search(){
 this.products= this.products.filter((product:any)=>product.name.includes(this.term));
}

// map method
mapin(){
   this.products=this.products.map((product:any)=>{product.Price=product.Price+product.Price*(50/100);return product;})
}
mapit(){
  this.products=this.products.map((product:any)=>{product.Price=product.Price+50;return product;})
}

// reduce method
reduce(){
  let totalcost=this.products.reduce((sum:any,product:any)=>sum+product.Price,0);
  alert(totalcost);
}



// create
name:string='';
price:number=0;
rating:number=0;

create(){
let product={
  name:this.name,
  price:this.price,
  rating:this.rating,
 
};
this.products.unshift(product);
}
}


