import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  rentalAddForm:FormGroup;
  cardetail:Car;
  rentalDetailFromService:Rental;
  rentDate:number;
  returnDate:number;
  constructor(private carDetailService:CarDetailService, private formBuilder:FormBuilder,private router:Router,private toastrService:ToastrService,private rentalService:RentalService, private activatedRoute:ActivatedRoute, private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    
      if(params["carId"]){
        
        this.getCarById(params["carId"]);
        this.rentalDetailFromService=this.paymentService.rentalDetail;
        this.rentDate= this.rentalDetailFromService.rentDate;
        this.returnDate= this.rentalDetailFromService.returnDate;
        
        
      } 
    })
    this.createCarRental();
  }

  createCarRental(){
    this.rentalAddForm = this.formBuilder.group({
      nameAndSurname:["",Validators.required],
      cardNumber:["",Validators.required],
      cardDateMonth:["",Validators.required],
      cardDateYear:["",Validators.required],
      cardCvv:["",Validators.required]
    })
  }

  getCarById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe(response=>{
      this.cardetail=response.data;
      
   
    })
  }

  addRental(){

    if(this.rentalAddForm.valid){
      
       this.rentalService.addRental(this.rentalDetailFromService).subscribe(data=>{
       this.toastrService.success(this.cardetail.brandName+" Rented","Successfully")
       this.router.navigate(["/"])
       
      },responseError=>{
        this.toastrService.error(responseError.error,"Error");
        
      })

     
      
    }else{
      this.toastrService.error("Card information is not correct!!","Warning")
    }
     
   
  }
}
