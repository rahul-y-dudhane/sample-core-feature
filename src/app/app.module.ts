import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FourWheelModule} from './fourwheeler/fourwheeler.module';
import {TwoWheelerModule} from './twowheeler/twowheeler.module';
import { VehicleService} from './services/vehicle-list.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
 
import { AppComponent } from './app.component';
import { RegistervehicleComponent } from './registervehicle/registervehicle.component';
import { AppRouterModule } from './app-router/app-router.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistervehicleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRouterModule, BrowserAnimationsModule,TwoWheelerModule, FourWheelModule,ReactiveFormsModule
  ],
  providers: [VehicleService],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule invokes");
  }
 }
