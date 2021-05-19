import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/colorResponseModel';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="http://localhost:54607/api/"

  constructor(private httpClient:HttpClient) { }

  getallcolors():Observable<ColorResponseModel>{
    let newPath = this.apiUrl +"colors/getallcolors";
    return this.httpClient.get<ColorResponseModel>(newPath);
  }
  getColorById(colorId:number):Observable<SingleResponseModel<Color>>{
    let newPath= this.apiUrl+"colors/getcolorbyId?id="+colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  addColor(color:Color):Observable<ResponseModel>{
    let newPath= this.apiUrl+"colors/add";
    return this.httpClient.post<ResponseModel>(newPath,color);
  }

  deleteColor(colorId:number):Observable<ResponseModel>{
    let newPath= this.apiUrl+"colors/delete?id="+colorId;
    return this.httpClient.delete<ResponseModel>(newPath);
  }

  updateColor(color:Color):Observable<ResponseModel>{
    let newPath= this.apiUrl+"colors/update";
    return this.httpClient.put<ResponseModel>(newPath,color);
  }
}
