import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root',
})
export class PharmacyService {
  isLoggenInVarError = false;
  data: any;
  token;
  date;
  supplyUrl = 'http://localhost:8300/api/pharmacysupply/PharmacySupply';
  loginpath = 'http://localhost:8400/authenticate';
  viewSchedulePath =
    'http://localhost:8200/api/scheduleAppointment/repSchedule';

  //path = "http://localhost:8100/api/medicinestock/getMedicineStockInformation"

  constructor(private http: HttpClient, private route: Router) {}

  public placeDemandMethod(name: String, demand: number) {
    console.log(localStorage.getItem('token'));
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(
      'http://localhost:8300/api/pharmacysupply/PharmacySupply?name=' +
        `${name}` +
        '&demand=' +
        `${demand}`,
      { headers }
    );
  }

  public welcomeHome(token: any) {
    console.log(localStorage.getItem('token'));
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(
      'http://localhost:8100/api/medicinestock/getMedicineStockInformation',
      { headers }
    );
  }

  login(logindata) {
    this.http.post(this.loginpath, logindata).subscribe(
      (res) => {
        //console.log(res["jwt"])
        this.token = res['jwt'];
        localStorage.setItem('token', this.token);
        this.route.navigate(['/home']);
      },
      (error) => {
        this.isLoggenInVarError = true;
      }
    );
  }

  public scheduleAppointment(startdate: string) {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(
      'http://localhost:8200/api/scheduleAppointment/repSchedule?date=' +
        `${startdate}`,
      { headers }
    );
  }

  public checkIsLoggenIn() {
    let token = localStorage.getItem('token');
    if (token === null) {
      this.route.navigate(['/login']);
    }
  }
}
