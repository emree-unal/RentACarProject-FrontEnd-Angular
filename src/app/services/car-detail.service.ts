
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="http://localhost:54607/api/";
  constructor(private httpClient:HttpClient ){ }

  getCarDetailById(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getcardetailbyId?id="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);

  }
}
