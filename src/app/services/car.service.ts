import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { CarAdd } from '../models/caradd';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="http://localhost:54607/api/"

  constructor(private httpClient:HttpClient) { }

  getallcars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getcarsbybrandid(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getcarsbycolorid(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getcarsbybrandidandcolorid(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandidandcolorid?brandId=" +brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  addCar(car:CarAdd):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

  deleteCar(carId:number):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/delete?id="+carId;
    return this.httpClient.delete<ResponseModel>(newPath);
  }

  getcarbyıd(carId:number):Observable<SingleResponseModel<CarAdd>>{
    let newPath=this.apiUrl+"cars/getcarbyId?id="+carId;
    return this.httpClient.get<SingleResponseModel<CarAdd>>(newPath);
  }

  updatecar(car:CarAdd):Observable<ResponseModel>{
    let newPath= this.apiUrl+"cars/update";
    return this.httpClient.put<ResponseModel>(newPath,car);
  }

}
