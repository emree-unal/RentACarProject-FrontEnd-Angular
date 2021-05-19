import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarAdd } from 'src/app/models/caradd';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carAddForm:FormGroup
  brands:Brand[];
  colors:Color[];
  brandId:number;
  colorId:number;

  constructor(private formBuilder:FormBuilder,private carService:CarService, private toastrService:ToastrService,
    private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllBrands();
    this.getAllColors();
  }


  createForm(){
    this.carAddForm = this.formBuilder.group({
      carId: [0],
      brandId: ["",Validators.required],
      colorId: ["",Validators.required],
      dailyPrice: ["",Validators.required],
      description: ["",Validators.required],
      modelYear: ["",Validators.required]
    
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

  addCar(){

    if(this.carAddForm.valid){
    let carModel:CarAdd = Object.assign({},this.carAddForm.value)
    
    this.carService.addCar(carModel).subscribe(response=>{
      
      this.toastrService.success(response.message,"Successfully Added") ;
   
    
    setTimeout(()=>{ window.location.reload();},1000); 
    },errorResponse=>{
      if(errorResponse.error.ValidationErrors.length>0){
        for (let i = 0; i < errorResponse.error.ValidationErrors.length; i++) {
          this.toastrService.error(errorResponse.error.ValidationErrors[i].ErrorMessage,"Validation Error");
        }
        
       }
    })
  }else{
    this.toastrService.error("Form is not valid","Error");
  }
   
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
}
