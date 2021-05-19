import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

import { Brand } from '../models/brand';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="http://localhost:54607/api/";

  constructor(private httpClient:HttpClient) { }

  getallbrands():Observable<BrandResponseModel>{
    let newPath= this.apiUrl+"brands/getallbrands";
    return this.httpClient.get<BrandResponseModel>(newPath);
  }

  getbrandbybrandname(brandName:string):Observable<ListResponseModel<Brand>>{
    let newPath= this.apiUrl+"brands/getbrandbybrandname?brandName="+brandName;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getbrandbybrandıd(brandId:number):Observable<SingleResponseModel<Brand>>{
    let newPath= this.apiUrl+"brands/getbrandbyId?Id="+brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  addBrand(brand:Brand):Observable<ResponseModel>{
    let newPath= this.apiUrl+"brands/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  deleteBrand(brandId:number):Observable<ResponseModel>{
    let newPath= this.apiUrl+"brands/delete?id="+brandId;
    return this.httpClient.delete<ResponseModel>(newPath);
  }

  updateBrand(brand:Brand):Observable<ResponseModel>{
    let newPath= this.apiUrl+"brands/update";
    return this.httpClient.put<ResponseModel>(newPath,brand);
  }

}
