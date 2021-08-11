import { PharmacyService } from './../pharmacy.service';
import { ViewscheduleComponent } from './../viewschedule/viewschedule.component';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returnschedule',
  templateUrl: './returnschedule.component.html',
  styleUrls: ['./returnschedule.component.css']
})
export class ReturnscheduleComponent implements OnInit {

  constructor(private http:HttpClient,private pharmacyservice:PharmacyService,private location: Location) { }

  response:any;
  StartDate: String;

  ngOnInit() {
    console.log(this.location.getState());
     this.pharmacyservice.scheduleAppointment(this.pharmacyservice.date["startdate"]).subscribe(data=>
      {
        this.response=data

        console.log(this.response);
        },
        (error)=>
        {
          console.log("error in return schedule")
        })
          //this.Router.navigateByUrl('/returnschedule',{ state: { id:1 , name:'Angular',value:resp } })

  }

  // public getApiCall(val:any){
  //   let resp=this.pharmacyservice.scheduleAppointment(val.startdate);
  //     resp.subscribe(data=>this.response);
  // }
}
