import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  constructor(private _httpClient:HttpClient) { }
  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  getVehicles():Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction')
  }

   // view
   getVehicle(id:any):Observable<any>
   {
     return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    
   }

  //  update

  updateVehicle(id:any,data:any):Observable<any>
  {
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data);
   
  }

  // filter
  getFilteredVehicles(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
    
  }
  // sort
  getSortedVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
    
  }

  

  deleteVehicles(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    
  }

  getPaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
    
  }

 createVehicle(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
 }
}