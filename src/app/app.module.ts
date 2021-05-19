import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorComponent } from './components/color/color/color.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CarRentalComponent } from './components/car-rental/car-rental.component';
import { PaymentComponent } from './components/payment/payment.component';

import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { ListBrandComponent } from './components/list-brand/list-brand.component';

import { AddColorComponent } from './components/add-color/add-color.component';

import { ListColorComponent } from './components/list-color/list-color.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';



@NgModule({
  declarations: [	
    AppComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    FilterBrandPipe,
    FilterColorPipe,
    CarFilterComponent,
    CarRentalComponent,
    PaymentComponent,
      AddBrandComponent,
      ListBrandComponent,
     
      AddColorComponent,
     
      ListColorComponent,
     
      ListCarComponent,
     
      AddCarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
