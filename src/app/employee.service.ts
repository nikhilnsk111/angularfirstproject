import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  
  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="https://6572df5d192318b7db412dfe.mockapi.io/employees"

  getEmployees():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }

  // filter
  getFilteredEmployees(term:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
    
  }

  // sort
  getSortedEmployees(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
    
  }


  getPaginatedEmployees(limit:any,page:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
    
  }
  
  
  deleteEmployees(id:any):Observable<any>{
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
    
  }

 
}
 