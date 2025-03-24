import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  
  public studentForm:FormGroup =new FormGroup({
    name:new FormControl(),
    color:new  FormControl(),
    cost:new  FormControl(),
    fuel:new  FormControl(),
  })
  
  constructor(private _studentService:StudentService,
     private _router:Router){}
  create(){
    console.log(this.studentForm.value);
    this._studentService.createStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("New Student Created Successfully!");
        this._router.navigateByUrl("/dashboard/student");
  
      },(err:any)=>{
        alert("Internal Service Error")
      }
    )
  }
 
  }
   
    
      
    
    

