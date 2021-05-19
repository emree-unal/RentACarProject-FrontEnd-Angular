import { Component, OnInit } from '@angular/core';

import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private colorService:ColorService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorForm();
  }


  createColorForm(){
    this.colorAddForm = this.formBuilder.group({
      colorId:[0],
      colorName:["",Validators.required],
     
    })
  }

  addColor(){
    if(this.colorAddForm.valid){
    let colorModel:Color= Object.assign({},this.colorAddForm.value)
    this.colorService.addColor(colorModel).subscribe(response=>{
      
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
