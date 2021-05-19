import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.css']
})
export class ListColorComponent implements OnInit {
  colors:Color[];
  colorUpdateForm:FormGroup
  constructor(private colorService:ColorService,private toastrService:ToastrService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getAllColor();
    this.createForm();
  }


  getAllColor(){
    this.colorService.getallcolors().subscribe(response=>{
      this.colors=response.data;
    })
  }

  createForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorId:[],
      colorName:["",Validators.required]
    })
  }

  deleteColor(colorId:number){
    this.colorService.deleteColor(colorId).subscribe(response=>{
      this.toastrService.success("Deleted Successfully","Successfully");
      setTimeout(()=>{window.location.reload()},1000);
    },responseError=>{
      this.toastrService.error("Couldn't delete","Error");
    })
  }

  getColorById(colorId:number){
    this.colorService.getColorById(colorId).subscribe(response=>{
      this.colorUpdateForm.setValue({colorId:response.data.colorId, colorName:response.data.colorName})
    })
  }

  updateColor(){
    let colorModel = Object.assign({},this.colorUpdateForm.value);
    this.colorService.updateColor(colorModel).subscribe(response=>{
      this.toastrService.success("Updated Successfully","Successfully");
      setTimeout(()=>{ window.location.reload();},1000);
    },responseError=>{
      this.toastrService.error("Couldn't Update","Error");
    })
  }
}
