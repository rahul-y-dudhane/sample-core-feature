import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponentComponent } from '../bike/bike-component.component';
import { ScootyComponent } from '../scooty/scooty.component';
import { AppRouterModule } from '../app-router/app-router.module';

@NgModule({
  declarations: [BikeComponentComponent, ScootyComponent],
  imports: [
    CommonModule,AppRouterModule
  ],
  exports: [BikeComponentComponent , ScootyComponent, AppRouterModule]
})
export class TwoWheelerModule {

  constructor(){
    console.log("TwoWheeler Module invokes");
  }
 }
