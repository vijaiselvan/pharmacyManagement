import { PharmacyService } from './../pharmacy.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //stockinfo:any

  response:any

//   authRequest:any={
//     "username":"pharmacy",
//     "password":"pharmacy123"
// }
  constructor(private service:PharmacyService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.service.checkIsLoggenIn();
    this.getApiCall();

    }

  public getApiCall(){
    console.log("getApiCall");
    let resp=this.service.welcomeHome(localStorage.getItem("token"));
      resp.subscribe(data=>this.response=data);
  }


}
