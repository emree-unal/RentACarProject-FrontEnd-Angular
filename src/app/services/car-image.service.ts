import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="http://localhost:54607/api/";
  constructor(private httpClient:HttpClient) { }


  getImagesByCarId(CarId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carImages/getimagesbycarid?carId="+CarId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }  
}
