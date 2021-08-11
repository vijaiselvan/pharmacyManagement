import { PharmacyService } from './../pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAnyError = false;

  loginData: any = {};
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  // emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";  ,Validators.pattern(this.emailPattern)
  // passwordPattern = '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})';  ,Validators.pattern(this.passwordPattern)

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public pharmacy: PharmacyService
  ) {}

  ngOnInit() {
    this.pharmacy.isLoggenInVarError = false;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    //localStorage.clear()
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.pharmacy.isLoggenInVarError = false;
      this.pharmacy.login(this.loginForm.value);
      console.log(this.pharmacy.isLoggenInVarError);
      console.log(this.pharmacy.token);
      console.log('token is' + localStorage.getItem('token'));
      //  this.auth.loginUserData(this.loginForm.value)
      //  if(this.auth.getusername.equals( "admin"))
    }
  }

  public toggleIsAnyError() {
    this.isAnyError = true;
    console.log(this.isAnyError);
  }
}
