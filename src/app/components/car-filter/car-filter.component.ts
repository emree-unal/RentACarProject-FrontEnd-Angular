import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  brands:Brand[];
  colors:Color[];
  brandFilter:number;
  colorFilter:number;
  
  constructor(private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getallbrands();
    this.getallcolors();
  }


  getallbrands(){
    this.brandService.getallbrands().subscribe(response=>{
      this.brands=response.data;
    });
  }

  getallcolors(){
    this.colorService.getallcolors().subscribe(response=>{
      this.colors=response.data;
    });
  }

  selectedbrand(brandId:number){
    
    if(this.brandFilter==brandId){
  
      return true;
    }else{
      return false;
    }

   
  }

  selectedcolor(colorId:number){
    
    if(this.colorFilter==colorId){
  
      return true;
    }else{
      return false;
    }

   
  }
}
