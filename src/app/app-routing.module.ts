import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/add-brand/add-brand.component';

import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarComponent } from './components/car/car/car.component';
import { ListBrandComponent } from './components/list-brand/list-brand.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { ListColorComponent } from './components/list-color/list-color.component';

import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
    {path:"",pathMatch:"full",component:CarComponent},
    {path:"cars",component:CarComponent},
    {path:"cars/brand/:brandId",component:CarComponent},
    {path:"cars/color/:colorId",component:CarComponent},
    {path:"car/detail/:carId",component:CarDetailComponent},
    {path:"cars/filter/:brandId/:colorId",component:CarComponent},
    {path:"car/payment/:carId",component:PaymentComponent},
    {path:"addbrand",component:AddBrandComponent},
    {path:"listbrands",component:ListBrandComponent},
    {path:"listcolors",component:ListColorComponent},
    {path:"listcars",component:ListCarComponent}
    
    

  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
