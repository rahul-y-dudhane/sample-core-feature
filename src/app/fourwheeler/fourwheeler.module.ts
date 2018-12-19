import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from '../cars/cars.component';
import { JeepsComponent } from '../jeeps/jeeps.component';
import { AppRouterModule } from '../app-router/app-router.module';

@NgModule({
  declarations: [CarsComponent, JeepsComponent],
  imports: [
    CommonModule,AppRouterModule
  ],
  exports: [ CarsComponent , JeepsComponent,AppRouterModule]
})
export class FourWheelModule { 

  constructor(){
    console.log("Four Wheel Module invokes");
  }
}
