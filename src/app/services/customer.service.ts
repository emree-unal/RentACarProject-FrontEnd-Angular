import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="http://localhost:54607/api/"

  constructor(private httpClient:HttpClient) { }

  getallcustomers():Observable<CustomerResponseModel>{
    let newPath= this.apiUrl+"customers/getallcustomers";
    return this.httpClient.get<CustomerResponseModel>(newPath);
  }
}
