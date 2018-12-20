import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from '../cars/cars.component';
import { JeepsComponent } from '../jeeps/jeeps.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [CarsComponent, JeepsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ CarsComponent , JeepsComponent]
})
export class FourWheelModule { 

  constructor(){
    console.log("Four Wheel Module invokes");
  }
}
