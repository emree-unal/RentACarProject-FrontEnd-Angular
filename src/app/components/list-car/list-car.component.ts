import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';
import { CarAdd } from 'src/app/models/caradd';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  cars:Car[];
  carUpdateForm:FormGroup;
  brandId:number;
  colorId:number;
  colors:Color[];
  brands:Brand[];
  constructor(private carService:CarService,private toastrService:ToastrService, private formBuilder:FormBuilder,
    private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAllCars();
    this.getAllBrands();
    this.getAllColors();
    this.createCarForm();
  }



  createCarForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:[],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      modelYear:["",Validators.required]
     
    })
  }

  selectedbrand(brandId:number){
      
    if(this.brandId==brandId){
  
      return true;
    }else{
      return false;
    }

  }

  selectedcolor(colorId:number){
      
    if(this.colorId==colorId){
  
      return true;
    }else{
      return false;
    }

  }

  getAllCars(){
    this.carService.getallcars().subscribe(response=>{
      this.cars=response.data;
    })
  }

  deleteCar(carId:number){
    this.carService.deleteCar(carId).subscribe(response=>{
      this.toastrService.success(response.message,"Successfully")
      setTimeout(()=>{ window.location.reload();},1000);
    },responseError=>{
      this.toastrService.error("Couldn't delete","Error")
    })
  }

  getCarById(carId:number){
    this.carService.getcarbyıd(carId).subscribe(response=>{
      console.log(response.data);
      this.carUpdateForm.patchValue({id:response.data.id,brandId:response.data.brandId,colorId:response.data.colorId,
        dailyPrice:response.data.dailyPrice,description:response.data.description,modelYear:response.data.modelYear
      })
    })
  }

  getAllBrands(){
    this.brandService.getallbrands().subscribe(response=>{
      this.brands=response.data;
    })
  }
  getAllColors(){
    this.colorService.getallcolors().subscribe(response=>{
      this.colors=response.data;
    })
  }

  updateCar(){
    if(this.carUpdateForm.valid){
    let carModel:CarAdd= Object.assign({},this.carUpdateForm.value)
  
    this.carService.updatecar(carModel).subscribe(response=>{
      
      this.toastrService.success(response.message,"Successfully")
      setTimeout(()=>{ window.location.reload();},1000);
    },responseError=>{
      if(responseError.error.ValidationErrors.length>0){
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error");
        }
        
       }
    })
  }
  }
}



