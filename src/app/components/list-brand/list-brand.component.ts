import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent implements OnInit {

  brands:Brand[];
  updateBrandObject:Brand;
  brandUpdateForm:FormGroup;
  constructor(private brandService:BrandService,private toastrService:ToastrService,private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllBrands();
    this.createBrandForm();
  }



  getAllBrands(){
    this.brandService.getallbrands().subscribe(data=>{
      this.brands=data.data;
    })
  }

  deleteBrand(brandId:number){
    this.brandService.deleteBrand(brandId).subscribe(response=>{
      
      
      this.toastrService.success(response.message,"Successfully")
      setTimeout(()=>{ window.location.reload();},1000);
    },responseError=>{
      this.toastrService.error("Couldn't delete","Error")
    })
  }

  createBrandForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId:[],
      brandName:["",Validators.required],
     
    })
  }

  updateBrand(){
    if(this.brandUpdateForm.valid){
    let brandModel:Brand= Object.assign({},this.brandUpdateForm.value)
    this.brandService.updateBrand(brandModel).subscribe(response=>{
      
      this.toastrService.success(response.message,"Successfully")
      setTimeout(()=>{ window.location.reload();},1000);
    },responseError=>{
      if(responseError.error.ValidationErrors.length>0){
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error");
        }
        
       }
    })
    }else{
      this.toastrService.error("Form is not valid","Error");
    }
  }

  getBrandById(brandId:number){
    this.brandService.getbrandbybrandıd(brandId).subscribe(response=>{
     this.brandUpdateForm.setValue({brandId:response.data.brandId,brandName:response.data.brandName});
   
    })
  }

}
