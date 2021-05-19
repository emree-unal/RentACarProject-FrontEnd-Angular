import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';

import { CarDetailService } from 'src/app/services/car-detail.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  
  customers:Customer[];
  carDetail:Car;
  carIdparam:number;
  rentalAddForm:FormGroup;
  customerIdValue:number;
  isDatesValed:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private customerService:CustomerService, 
    private formBuilder:FormBuilder, private carDetailService:CarDetailService, 
    private rentalService:RentalService, private toastrService:ToastrService,private router:Router,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.carIdparam=parseInt(params["carId"]);
      //console.log(this.carId);
      this.getCarById(params["carId"]);
    })
    this.createCarRental();
    this.getcustomers();
  }


  getcustomers(){
    this.customerService.getallcustomers().subscribe(response=>{
      this.customers=response.data;
  
    })
    }
  
    createCarRental(){
      this.rentalAddForm = this.formBuilder.group({
        carId:["",Validators.required],
        customerId:["",Validators.required],
        rentDate:["",Validators.required],
        returnDate:["",Validators.required]
      })
    }
  
    selectedcustomer(customerId:number){
      
      if(this.customerIdValue==customerId){
    
        return true;
      }else{
        return false;
      }
  
    }
  
  

    rentalDatesIsAvailable(){

      if(this.rentalAddForm.valid){
        
     
        let rentalModel= Object.assign({},this.rentalAddForm.value)
        
         this.rentalService.rentalDatesIsAvailable(rentalModel).subscribe(data=>{
           this.paymentService.rentalDetail=data.data;
          console.log(data.data)
         this.toastrService.info("You are being redirected to the payment page","Payment Process")
         setTimeout(() => {this.router.navigate(["car/payment/"+this.carIdparam]);},3000);
         
        
        },responseError=>{
          this.toastrService.error(responseError.error,"Error");
          this.isDatesValed=false;
        })

        
      }else{
        this.toastrService.error("Form is not valid!!","Warning")
      }
       
     
    }

    getCarById(carId:number){
      this.carDetailService.getCarDetailById(carId).subscribe(response=>{
        this.carDetail=response.data;
       
     
      })
    }

    add(){
      let rentalModel= Object.assign({},this.rentalAddForm.value)
      console.log(rentalModel);
    }
}
