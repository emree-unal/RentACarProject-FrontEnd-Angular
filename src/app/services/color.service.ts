import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="http://localhost:54607/api/colors/getallcolors"

  constructor(private httpClient:HttpClient) { }

  getallcolors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
