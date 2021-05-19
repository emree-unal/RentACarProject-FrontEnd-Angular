import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[];
  dataLoaded:boolean=false;
  imageBasePath="http://localhost:54607";

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
   
      if(params["brandId"] && params["colorId"]){
        this.getcarsbybrandidandcolorid(params["brandId"],params["colorId"])
      }
      else if(params["brandId"]){
      
        this.getCarsByBrandId(params["brandId"])
     
       
      }else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
       
        this.getCars();
      }
    })
    
  }
    
  
  getCars(){
    this.carService.getallcars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
     
    })
}

  getCarsByBrandId(brandId:number){
    this.carService.getcarsbybrandid(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
     
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getcarsbycolorid(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
     
    })
  }
  

  getcarsbybrandidandcolorid(brandId:number,colorId:number){
    this.carService.getcarsbybrandidandcolorid(brandId,colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
     
    })
  }
}
