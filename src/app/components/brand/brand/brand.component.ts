import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[];
  currentBrand:Brand;
  emptyBrand:Brand;
  filterBrandText="";
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands()
  {
    this.brandService.getallbrands().subscribe(response=>{
      this.brands=response.data;
  
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  currentBrandClass(brand:Brand){
    if(this.currentBrand==brand)
    {
      return " list-group-item list-group-item-action active";
    }else{
      return  "list-group-item list-group-item-action"
    }
  }
 
  currentAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item list-group-item-action active";
    }else{
      return "list-group-item list-group-item-action";
    }
  }

  clearCurrentBrand(){
    this.currentBrand=this.emptyBrand;
  }
}
