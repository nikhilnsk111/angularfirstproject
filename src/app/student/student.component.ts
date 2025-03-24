import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  Student:any;
  students: any;
  term: any;
  Students: any;
  constructor(private _studentService:StudentService){
     _studentService.getStudents().subscribe(
      (data:any)=>{
        console.log(data);
        this.Student=data;
      },(err:any)=>{
        alert()
      }
     )
    }

    filter(){
      this._studentService.getFilteredStudents(this.term).subscribe(
        (data:any)=>{
          console.log(data);
          this.Student=data;
        },(err:any)=>{
          alert('server error')
        }
      )
     }

     column:string='';
      order:string='';

      sort(){
        this._studentService.getSortedStudents(this.column,this.order).subscribe(
          (data:any)=>{
    
            console.log(data);
            this.Student=data;
    
          },(err:any)=>{
            alert("Internal Server Error!");
          }
    )
  }


  
  loadStudents(){
    this._studentService.getStudents().subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data;
        console.log(this.loadStudents);

      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

 
  delete(id:any){
    if(confirm("Are you sure to delete?")==true){
    this._studentService.deleteStudents(id).subscribe(
      (data:any)=>{

        alert("Record Deleted Successfully!");
        this.loadStudents();

      },(err:any)=>{
        alert("Internal Server Error!");
      }
)
}else{
  alert("You are cancelled")
}

}


limit:string='';
page:string='';
pagination(){
  this._studentService.getPaginatedStudents(this.limit,this.page).subscribe(
    (data:any)=>{
      console.log(data);
      this.students=data;
    },(err:any)=>{
      alert("Internal Server Error")
    }
 )
}

  
   
  
    }
