import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient,private Router:Router) { }

  ngOnInit(): void {
    this.onSubmit;
  }

  onSubmit(){
    localStorage.clear();
    this.Router.navigate(['/login'])
  }
}
