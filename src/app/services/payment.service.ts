import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailService } from './car-detail.service';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  rentalDetail:Rental;
  apiUrl="http://localhost:54607/api/";
 
  constructor(private carDetailService:CarDetailService,private httpClient:HttpClient ) { }

  getCarDetailById(carId:number):Observable<SingleResponseModel<Car>>{
    console.log("payment service1" + this.rentalDetail)
    let newPath=this.apiUrl +"cars/getcardetailbyId?id="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
    

  }
}
