import { PharmacyService } from './pharmacy.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { PlacedemandComponent } from './placedemand/placedemand.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SupplyavailedComponent } from './supplyavailed/supplyavailed.component';
import { ReturnscheduleComponent } from './returnschedule/returnschedule.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewscheduleComponent,
    PlacedemandComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SupplyavailedComponent,
    ReturnscheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PharmacyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
