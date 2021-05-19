import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

 
  cardetail:Car;

  carImages:CarImage[];
 
  imageBasePath="http://localhost:54607";
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute, 
    private carImageService:CarImageService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    
      if(params["carId"]){
        
        this.getCarById(params["carId"]);
        this.getImagesByCarId(params["carId"]);
        
      } 
    })
  }

  getCarById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe(response=>{
      this.cardetail=response.data;
      
   
    })
  }

  getImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
     
    })
  }
 

  getCurrentImageClass(image:CarImage){
   
    if(image == this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

 
}
