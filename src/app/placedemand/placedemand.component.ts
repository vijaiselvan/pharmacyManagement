import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Medicine } from './../medicine';
import { PharmacyService } from './../pharmacy.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-placedemand',
  templateUrl: './placedemand.component.html',
  styleUrls: ['./placedemand.component.css']
})
export class PlacedemandComponent implements OnInit {



  constructor(private service: PharmacyService, private http: HttpClient, private FormBuilder: FormBuilder,private Router:Router) { }

  formData:any
  ngOnInit(): void {

    onsubmit;
  }

  public onSubmit(formData) {

    //let resp = this.service.placeDemandMethod(formData.name, formData.demand)

    //resp.subscribe((data) => console.log(data))
    this.service.data=formData
    console.log(JSON.stringify(this.service.data))
    this.Router.navigate(['/supplyavailed'])


  }
}
