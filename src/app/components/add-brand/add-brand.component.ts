import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';



@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm(){
    this.brandAddForm = this.formBuilder.group({
      brandId:[0],
      brandName:["",Validators.required],
     
    })
  }

  addBrand(){
    if(this.brandAddForm.valid){
      let brandModel:Brand= Object.assign({},this.brandAddForm.value)
      this.brandService.addBrand(brandModel).subscribe(response=>{
       
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
  
}
