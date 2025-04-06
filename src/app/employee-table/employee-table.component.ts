import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent  {

  employees: any = [];
  term: string = '';
 
  column: string = '';
  order: string = '';


 
 constructor(private _employeeService:EmployeeService){
  _employeeService.getEmployees().subscribe(
     (data:any)=>{
       console.log(data);
       this.employees=data;
       console.log(this.employees);
     },(err:any)=>{
       alert("Internal Server Error")
     }
    )
   }
 
  
   // filter
   filter(){
     this. _employeeService.getFilteredEmployees(this.term).subscribe(
       (data:any)=>{
 
         console.log(data);
         this.employees=data;
 
       },(err:any)=>{
         alert("Internal Server Error")
       }
     )
     }

     sort(){
      this._employeeService.getSortedEmployees(this.column,this.order).subscribe(
        (data:any)=>{
  
          console.log(data);
          this.employees=data;
  
        },(err:any)=>{
          alert("Internal Server Error!");
        }
  )
}


limit:string='';
page:string='';
pagination(){
  this._employeeService.getPaginatedEmployees(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.employees=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }
 )
}



loadEmployees(){
  this._employeeService.getEmployees().subscribe(
    (data:any)=>{
      console.log(data);
      this.employees=data;
      console.log(this.employees);

    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}


delete(id:any){
  if(confirm("Are you sure to delete?")==true){
  this._employeeService.deleteEmployees(id).subscribe(
    (data:any)=>{

      alert("Record Deleted Successfully!");
      this.loadEmployees();

    },(err:any)=>{
      alert("Internal Server Error!");
    }
)
}else{
alert("You are cancelled")
}
}

}