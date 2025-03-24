import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FlipcartService {

   constructor(private _httpClient:HttpClient) { }
  
    getFlipcarts():Observable<any>{
      return this._httpClient.get('https://fakestoreapi.com/products')
    }
  
}
