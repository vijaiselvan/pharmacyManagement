import { ReturnscheduleComponent } from './../returnschedule/returnschedule.component';
import { PharmacyService } from './../pharmacy.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  errorMessage = "";
  minDate:any;

  constructor(private formBuilder: FormBuilder, private Router: Router, private Pharmacy: PharmacyService) { }

  StartDate: Date;

  ngOnInit() {
    this.minDate=this.getNowDate();
    
  }
  getValues(val:any){
    this.Pharmacy.date=val
    console.log(JSON.stringify(this.Pharmacy.date))
    this.Router.navigate(['/returnschedule'])
  }
  getNowDate() {
    //return string
    var returnDate = "";
    //get datetime now
    var today = new Date();
    //split
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //because January is 0! 
    var yyyy = today.getFullYear();
    //Interpolation date
    returnDate += `${yyyy}-`;
    if (mm < 10) {
      returnDate += `0${mm}-`;
    } else {
      returnDate += `${mm}-`;
    }
    if (dd < 10) {
      returnDate += `0${dd}`;
    } else {
      returnDate += `${dd}`;
    }
    return returnDate;
    

  }

}
