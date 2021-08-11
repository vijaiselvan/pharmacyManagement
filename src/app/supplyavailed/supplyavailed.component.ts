import { HttpClient } from '@angular/common/http';
import { Medicine } from './../medicine';
import { PharmacyService } from './../pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplyavailed',
  templateUrl: './supplyavailed.component.html',
  styleUrls: ['./supplyavailed.component.css'],
})
export class SupplyavailedComponent implements OnInit {
  response: any;
  constructor(
    private http: HttpClient,
    private pharmacyservice: PharmacyService
  ) {}

  ngOnInit(): void {
    this.pharmacyservice.checkIsLoggenIn();
    this.pharmacyservice
      .placeDemandMethod(
        this.pharmacyservice.data['name'],
        this.pharmacyservice.data['demand']
      )
      .subscribe(
        (data) => {
          this.response = data;

          console.log(this.response);
        },
        (error) => {
          console.log('error in return schedule');
        }
      );
  }
}
