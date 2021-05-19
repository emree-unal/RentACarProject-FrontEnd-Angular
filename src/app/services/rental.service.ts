import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="http://localhost:54607/api/"

  constructor(private httpClient:HttpClient) { }

  getallrentals():Observable<RentalResponseModel>{
    let newPath = this.apiUrl+"rentals/getallrentals";
    return this.httpClient.get<RentalResponseModel>(newPath);
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl+"rentals/add";
    console.log(rental);
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }

  rentalDatesIsAvailable(rental:Rental):Observable<SingleResponseModel<Rental>>{
    let newPath = this.apiUrl+"rentals/datesisavailable";
    console.log(rental);
    return this.httpClient.post<SingleResponseModel<Rental>>(newPath,rental)
  }
}
