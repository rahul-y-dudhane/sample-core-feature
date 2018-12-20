import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponentComponent } from '../bike/bike-component.component';
import { ScootyComponent } from '../scooty/scooty.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BikeComponentComponent, ScootyComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BikeComponentComponent , ScootyComponent]
})
export class TwoWheelerModule {

  constructor(){
    console.log("TwoWheeler Module invokes");
  }
 }
